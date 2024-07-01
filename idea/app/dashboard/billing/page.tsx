import React from 'react'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

function page() {
  return (
    <div className='p-5'>
      <Link href={"/dashboard"}>
        <Button> <ArrowLeft /> Back</Button>
      </Link>
      
    <div className='text-3xl'>Billing
    <h2>I don't have a PAN number yet so can't create a razorpay account T_T</h2></div>
    </div>
  )
}

export default page