import { StringColumn, Table, IntegerColumn } from '@servicenow/sdk/core'

export const x_snc_rjapp_restaurant = Table({
    name: "x_snc_rjapp_restaurant",
    display: 'name',
    schema: {
        name: StringColumn({ label: 'Restaurant', mandatory: true }),
        price: IntegerColumn({ label: 'Price'})
    }
})