export const applicantsQuery = `* [_type == 'applicant']{
_id,
name,
birthday,
likability,
image,
stack,
additional
}`;

export const applicantByIndexQuery = (index: number) => {
    return `* [_type == 'applicant'][${index}]`
}
