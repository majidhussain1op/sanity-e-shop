import { type SchemaTypeDefinition } from 'sanity'


import {categoryType} from './categoryType'
import {salesType} from "./salesType"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType, salesType],
}
