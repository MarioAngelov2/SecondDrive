export default function dateFormat(date) {
    return new Date(date).toLocaleString("bg-BG", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
    });
}
