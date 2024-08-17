import { supabase } from "./data";

export async function createNewUser(password: string, email: string) {
    try {
        console.log('Password: ' + password)
        console.log('Email: ' + email);

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password
        })

        if (data) {
            console.log(data)
        }
        return { data, error };
    } catch(error) {
        throw new Error(`Error: ${error}`)
    }
}

export async function signIn(password: string, email: string) {
    try {
        console.log('Password: ' + password)
        console.log('Email: ' + email);
        const { data, error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password
        })


        if (data) {
            console.log(data)
        }
        return { data, error };
    } catch(error) {
        throw new Error(`Error: ${error}`)
    }
}

export async function signOut() {
    try {
        await supabase.auth.signOut();
    } catch(error) {
        throw new Error(`Error: ${error}`)
    }
}
