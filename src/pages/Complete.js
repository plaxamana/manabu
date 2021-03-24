import React from 'react'

import Card from '../components/Card'

export default function Complete() {
  return (
    <Card>
      <div className="card-body">
        <p className="card-heading text2xl">Session complete!</p>
        <p className="card-heading text-secondary textxl">Great job!</p>
        <p className="text6xl">👍</p>
        <p>See you soon!</p>
      </div>
    </Card>
  )
}
