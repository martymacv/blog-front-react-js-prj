import { API_BASE_URL, API_ENDPOINTS } from '../constants';
import { redirect } from "react-router-dom";

export async function registrationAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.AUTH.REGISTER}`, 
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        }
    );

    if (response.ok) {
        const user = await response.json()
        return {
            redirect: '/auth/confirm-email',
            success: true,
            user: user
        }
    }
}

export async function loginAction({ request }) {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');

    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.AUTH.LOGIN}`,
        {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "accept": "application/json"
            },
            body: JSON.stringify({ email, password }),
        }
    );

    const data = await response.json();

    if (response.ok) {
        if (data.access) {
            localStorage.setItem('access_token', data.access);
        }
        if (data.refresh) {
            localStorage.setItem('refresh_token', data.refresh);
        }

        return redirect('/');
    }
}

export async function confirmAction({ request }) {
    const userId = localStorage.getItem('userId')
    const formData = await request.formData();
    const confirmCode = formData.get('confirmCode');

    const response = await fetch(
        `${API_BASE_URL}${API_ENDPOINTS.AUTH.CONFIRM(userId)}`,
        {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ confirm_code: confirmCode }),
        }
    );

    const data = await response.json();

    if (response.ok) {
        if (data.access) {
            localStorage.setItem('access_token', data.access);
        }
        if (data.refresh) {
            localStorage.setItem('refresh_token', data.refresh);
        }

        return redirect('/auth/login');
    }
}