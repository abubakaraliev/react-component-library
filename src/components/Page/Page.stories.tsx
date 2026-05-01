import Page from ".";

export default {
    title: "Components/Page",
    component: Page,
};

export const Default = {
    args: {
        title: "Page Title",
        children: <p>This is the content of the page.</p>,
    },
};

export const WithLongContent = {
    args: {
        title: "Page Title",
        children: (
            <>
                <p>This is the content of the page.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </>
        ),
    },
};

export const WithCustomContent = {
    args: {
        title: "Custom Page",
        children: (
            <div style={{ backgroundColor: "#f0f0f0", padding: "20px" }}>
                <h2>Custom Content</h2>
                <p>This page has custom content with a background color.</p>
            </div>
        ),
    },
};