import { getUserById } from "@/lib/actions/user.actions";
import { UserAuth } from "../../../../../context/AuthContext"
import { redirect } from 'next/navigation';
import React from 'react'

export const AddTransformationTypePage = async ({params: {type}}: SearchParamProps) => {
  const {user} = UserAuth(); 

  if(!user) redirect('/sign-in');

  const userId = await getUserById(user);
  
  return (
    <div>
       <section className="mt-10">
        {/* <TransformationForm 
          action="Add"
          userId={user._id}
          type={transformation.type as TransformationTypeKey}
          creditBalance={user.creditBalance}
        /> */}
      </section>
    </div>
  )
}
