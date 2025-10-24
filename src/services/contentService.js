import axios from 'axios';

export async function fetchProjects() {
    const response = await axios.get(`${process.env.PUBLIC_URL}/project.json`);
    return response.data;
}

export async function fetchBlogPosts() {
    const response = await axios.get(`${process.env.PUBLIC_URL}/blog.json`);
    return response.data;
}

export async function fetchExperiences() {
    const response = await axios.get(`${process.env.PUBLIC_URL}/experince.json`);
    return response.data;
}


