
# Django Project Template
This is a Django project template with reactjs as it frontend implementation

## code structure
This template contains:

* relationship between django app and django project
* connections between django project and front end code
* how to organize code, test and static files
* how to manage dependencies
* how to organize structure of test code

code structures as below:

    - root
		- djang_project_template	# project folder
			- django_app			# django app folder
			- static				# front end folder
				- app				# react app folder
				- css
				- font
				- image
				- js
				- less
				- libs
			- templates				# django template folder
			- templatetags			# django tag folder
			settings.py				# default django settings
			settings_dev.py			# django settings for development environment
			settings_test.py		# django settings for test environment
			settings_prod.py		# django settings for production environment
		- tests						# test folder
			- functional			# functional test folder
			- unittest				# unittest folder
		manage.py
		package.json				# npm config file
		requirements.txt			# python pip dependencies file
		requirements_test.txt 		# python pip testing file
		webpack.config.js			# webpack config file


## generate a project from this project
In this project there is a script [generate_project.py](/generate_project.py)which can be used
to generate a new project from this template, below explains how to use this script:

	$> python generate_project.py -h
	usage: Django project generator [-h] -p PROJECT_NAME -a APP_NAME
	                                [-o OUTPUT_DIR]
	
	optional arguments:
	  -h, --help            show this help message and exit
	  -p PROJECT_NAME, --project-name PROJECT_NAME
	                        project name
	  -a APP_NAME, --app-name APP_NAME
	                        default django application name
	  -o OUTPUT_DIR, --output-dir OUTPUT_DIR
	                        output directory for generated project

In above, PROJECT_NAME is the project name，APP_NAME as the default app name，and there is
another option OUTPUT_DIR is where the generated project where be located，by default it
will be generate_project's parent folder. Have fun!
