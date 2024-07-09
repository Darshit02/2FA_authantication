"use client"
import { UserInfo } from '@/components/user-info-client'
import { useCurrentUser } from '@/hooks/use-current-user'
import React from 'react'

const ClientPage =  () => {
    const user =  useCurrentUser()
  return (
    <UserInfo
    label='Client Component'
    user={user}
    />
  )
}

export default ClientPage
