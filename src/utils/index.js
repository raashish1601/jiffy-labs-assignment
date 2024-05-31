export function getCompressedCount(num) {
    num = Number(num);
    const BILLION = 1_000_000_000;
    const MILLION = 1_000_000;
    const THOUSAND = 1_000;
    if (num >= BILLION) {
        num /= BILLION;
        num = num.toFixed(0) + "B";
    } else if (num >= MILLION) {
        num /= MILLION;
        num = num.toFixed(0) + "M";
    } else {
        num = num.toFixed(0);
    }
    return num;
};

export function getInitials(fullName) {
    if (!fullName) return 'NN';

    const nameParts = fullName.trim().split(' ');

    if (nameParts.length === 1) {
        // Case: Only one part found (presumably the first name)
        const firstName = nameParts[0];
        if (firstName.length === 1) {
            return `${firstName.toUpperCase()}`; // Case: First name has only one character
        } else {
            return `${firstName.charAt(0).toUpperCase()}${firstName.charAt(1).toUpperCase()}`; // Case: First name exists, take first two characters
        }
    } else if (nameParts.length >= 2) {
        // Case: Multiple parts found (presumably first name and last name)
        const firstNameInitial = nameParts[0].charAt(0).toUpperCase();
        const lastNameInitial = nameParts[nameParts.length - 1].charAt(0).toUpperCase();
        return `${firstNameInitial}${lastNameInitial}`; // Case: Both first name and last name exist
    } else {
        return 'NN'; // Fallback: Unlikely scenario where no valid parts are found
    }
};
