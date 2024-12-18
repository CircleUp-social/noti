// Function to create a notification
function createNotification() {
    const title = document.getElementById('notif-title').value;
    const message = document.getElementById('notif-message').value;
    const image = document.getElementById('notif-image').value;
    const type = document.getElementById('notif-type').value;
    const duration = parseInt(document.getElementById('notif-duration').value, 10);

    // Create the notification container
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;

    // Add image if provided
    if (image) {
        const img = document.createElement('img');
        img.src = image;
        notification.appendChild(img);
    }

    // Create content container for title and message
    const content = document.createElement('div');
    content.className = 'content';

    // Add title if provided
    if (title) {
        const titleEl = document.createElement('div');
        titleEl.className = 'title';
        titleEl.textContent = title;
        content.appendChild(titleEl);
    }

    // Add message if provided
    if (message) {
        const messageEl = document.createElement('div');
        messageEl.className = 'message';
        messageEl.textContent = message;
        content.appendChild(messageEl);
    }

    // Append content to notification and append notification to body
    notification.appendChild(content);
    document.body.appendChild(notification);

    // Remove notification after specified duration
    setTimeout(() => notification.remove(), duration);
}

// Function to create a banner
function createBanner() {
    const message = document.getElementById('banner-message').value;
    const image = document.getElementById('banner-image').value;
    const link = document.getElementById('banner-link').value;
    const duration = parseInt(document.getElementById('banner-duration').value, 10);

    // Create the banner container
    const banner = document.createElement('div');
    banner.className = 'banner';

    // Add image if provided
    if (image) {
        const img = document.createElement('img');
        img.src = image;
        banner.appendChild(img);
    }

    // Create the text container for the banner message
    const text = document.createElement('div');
    text.className = 'text';
    text.textContent = message;

    // If a link is provided, make the banner clickable
    if (link) {
        text.onclick = () => window.open(link, '_blank');
    }

    // Append text to banner and banner to body
    banner.appendChild(text);
    document.body.appendChild(banner);

    // Remove banner after specified duration
    setTimeout(() => banner.remove(), duration);
}
