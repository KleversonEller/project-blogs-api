module.exports = {
    required: { error: { code: 'required', message: 'Some required fields are missing' } },
    invalidData: { error: { code: 'invalidData', message: 'Invalid fields' } },
    duplicity: { error: { code: 'alreadyExists', message: 'User already registered' } },
    userNotFound: { error: { code: 'notFound', message: 'User does not exist' } },
};