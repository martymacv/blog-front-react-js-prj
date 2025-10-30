export const API_BASE_URL = 'http://localhost:8000';

export function API_DATA(method, bodyData = null, options = {}) {
    const headers = {
        "Content-Type": "application/json",
        ...options.headers,
    };
    const token = localStorage.getItem('access_token');

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    const config = {
        credentials: 'include',
        method, headers, ...options
    };

    if (bodyData) {
        config.body = JSON.stringify(bodyData);
    }

    return config;
}

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/user/token/',
    REGISTER: '/auth/user/',
    CONFIRM: (userId) => `/auth/user/${userId}/confirm`,
    REFRESH: '/auth/token/refresh/',
    LOGOUT: '/auth/logout/',
    PROFILE: '/auth/profile/',
  },
  USERS: {
    LIST: '/api/users/',
    DETAIL: '/api/users/:id/',
  },
  POSTS: {
    LIST: '/api/posts/',
    DETAIL: '/api/posts/:id/',
  }
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/registration',
  PROFILE: '/profile',
};

export const STORAGE_KEYS = {
  ACCESS_TOKEN: 'access_token',
  REFRESH_TOKEN: 'refresh_token',
  USER_DATA: 'user_data',
};
