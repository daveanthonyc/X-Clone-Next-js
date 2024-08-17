'use client'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label";
import { createNewUser, signIn, signOut } from "../supabase/auth";
import { ChangeEvent, useState } from "react";
import { Button } from "@/components/ui/button";

// Should be a signin page that has fields to create a new user

export default function Home() {
    const [email, setEmail] = useState<string>('');
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <AlertDialog>
          <AlertDialogTrigger className="">Create your account</AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Create your account</AlertDialogTitle>
              <div>
                <Label htmlFor="name">Name</Label>
                <Input onChange={(e) => setName(e.currentTarget.value)} type="text"/>
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input onChange={(e) => setEmail(e.currentTarget.value)} type="email"/>
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input onChange={(e) => setPassword(e.currentTarget.value)} type="password"/>
              </div>

                <Label htmlFor="birthdate">Date of birth</Label>
              <AlertDialogDescription>
                This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
              </AlertDialogDescription>

              <div className="flex">
                 
              </div>

            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => signIn(password, email)}>Sign in</AlertDialogAction>
              <AlertDialogAction onClick={() => createNewUser(password, email)}>Sign up</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
}
