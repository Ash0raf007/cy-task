'use server';
import {jwtDecode} from "jwt-decode";
import { cookies } from "next/headers";
import { redirect } from 'next/navigation';
import { loginClient } from "../apis/axios";

export async function formSubmithundeler(formData) {
    const email = formData.get('email');
    const password = formData.get('password');

    let redirectPath;
    let errorMessage;

    try {
        if (!email || !password) {
            throw new Error("Please provide a valid email and password.");
        }

        const user = await loginClient({ email, password });
        console.log("User:", user);

        if (!user?.data?.access) {
            throw new Error("User not found.");
        }

        // Set cookies
        cookies().set('token', user.data.access);

        // Set redirect path
        redirectPath = '/dashboard/employess/profile';
    } catch (error) {
        console.error("Error:", error);

        if (error.response) {
            if (error.response.status === 500) {
                errorMessage = 'No response from the server. Please try again later.';
            } else {
                errorMessage = error.response.data?.error || error.response.data.detail
            }
        } else if (error instanceof Error) {
            errorMessage = error.message;
        } else {
            errorMessage = "An unknown error occurred.";
        }

        return {
            error: errorMessage,
            errorType: error.name,
        };
    } finally {
        if (redirectPath) {
            redirect(redirectPath);
        }
    }
}
