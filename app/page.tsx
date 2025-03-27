'use client'
import React, { useEffect } from "react"
import { useRouter } from "next/router";
const Page: React.FC = () => {
  const router = useRouter()
  const isLoggedIn = true;
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/dashboard")
    } else {
      router.push("/login")
    }
  }, [isLoggedIn, router])
 
  return null
}

export default Page