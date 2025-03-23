export class OrderFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    filter() {
        const queryObj = { ...this.queryString };
        const excludedFields = ['page', 'sort', 'limit', 'fields', 'dateRange'];
        excludedFields.forEach(el => delete queryObj[el]);

        // Handle date range filtering
        if (this.queryString.dateRange) {
            const [startDate, endDate] = this.queryString.dateRange.split(',');
            queryObj.createdAt = {
                $gte: new Date(startDate),
                $lte: new Date(endDate)
            };
        }

        this.query = this.query.find(queryObj);
        return this;
    }

    sort() {
        if (this.queryString.sort) {
            const sortBy = this.queryString.sort.split(',').join(' ');
            this.query = this.query.sort(sortBy);
        } else {
            this.query = this.query.sort('-createdAt');
        }
        return this;
    }

    paginate() {
        const page = this.queryString.page * 1 || 1;
        const limit = this.queryString.limit * 1 || 10;
        const skip = (page - 1) * limit;

        this.query = this.query.skip(skip).limit(limit);
        return this;
    }

    populate() {
        this.query = this.query
            .populate('user', 'name email')
            .populate('orderItems.product', 'name price');
        return this;
    }
}