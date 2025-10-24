import emailjs from '@emailjs/browser';

export async function sendEmail({ name, email, message }) {
    return emailjs.send(
        'service_9tvyzwk',
        'template_l2klwwo',
        {
            from_name: name,
            from_email: email,
            message: `${message}\n Email: ${email}`,
            to_email: 'mwashid914@gmail.com',
        },
        'Alw75CPrvueSSLxxL'
    );
}


