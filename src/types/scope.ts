type Scopes =
    'OWNER' |

    // environment
    'READ_ENV'   |
    'WRITE_ENV'  |
    'DELETE_ENV' |

    // project
    'READ_PROJECT'   |
    'WRITE_PROJECT'  |
    'DELETE_PROJECT' |

    // branch
    'READ_BRANCH'   |
    'WRITE_BRANCH'  |
    'DELETE_BRANCH' |

    // member
    'MANAGE_MEMBERS' |

    // billing
    'MANAGE_BILLING';

export { Scopes };