import { READ_ITEM } from "./yoshiConstants"

export const readItem = (item) => {
    return {
        READ_ITEM,
        payload: {
            item //payload.item
        }
    }
}