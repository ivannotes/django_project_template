# Test config
from .settings import *

INSTALL_APPS = INSTALL_APPS + [
    'django_nose',

    'tests'
]

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': ':memory:',
    }
}

TEST_RUNNER = 'django_nose.NoseTestSuiteRunner'
