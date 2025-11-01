export function slugify(text) {
    return text?.normalize("NFD") // split accented chars (e.g., é → e +  ́)
        .replace(/[\u0300-\u036f]/g, "") // remove accents
        .toLowerCase()
        .trim()
        .replace(/[\s\W-]+/g, "-")
        .replace(/^-+|-+$/g, "");
}
