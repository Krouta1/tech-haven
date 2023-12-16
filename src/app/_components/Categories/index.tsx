import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CartegoryCard from './CategoryCard'

import classes from './index.module.scss'

interface CategoriesProps {
  categories: Category[]
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <section className={classes.container}>
      <div className={classes.titlWrapper}>
        <h3>Shop by Categories</h3>
        <Link href={'/products'}>Show All</Link>
      </div>
      <div className={classes.list}>
        {categories.map(category => (
          <CartegoryCard key={category.id} category={category} />
        ))}
      </div>
    </section>
  )
}

export default Categories
