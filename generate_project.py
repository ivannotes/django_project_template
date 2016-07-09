import argparse
import os
import sys
import shutil


_IGNORED_ROOT_DIRS = ["node_modules", ".git", ".ropeproject", "generate_project.py"]
_TEMPLATE_PROJECT_NAME = "django_project_template"
_TEMPLATE_APP_NAME = "django_app"


def _generate_project(project_name, app_name, output_dir=None):
    if not output_dir:
        template_dir = os.path.dirname(os.path.abspath(__file__))
        pararent_dir = os.path.dirname(template_dir)
        output_dir = os.path.join(pararent_dir, project_name)

    if os.path.exists(output_dir):
        print "Output directory already exists, exit without generate project!"
        sys.exit(1)
    _copy_root_dir(template_dir, output_dir)
    _rename_app_dir(output_dir, project_name, app_name)
    _update_settings_with_project_name(output_dir, project_name, app_name)
    _update_manage_file_with_project_name(output_dir, project_name, app_name)


def _copy_root_dir(template_dir, output_dir):
    print "start to copy from {} to {}".format(template_dir, output_dir)
    shutil.copytree(
        template_dir, output_dir,
        ignore=lambda src, names: _IGNORED_ROOT_DIRS)


def _rename_app_dir(output_dir, project_name, app_name):
    template_project_dir = os.path.join(output_dir, _TEMPLATE_PROJECT_NAME)
    output_project_dir = os.path.join(output_dir, project_name)
    shutil.move(template_project_dir, output_project_dir)
    template_app_dir = os.path.join(output_project_dir, _TEMPLATE_APP_NAME)
    output_app_dir = os.path.join(output_project_dir, app_name)
    shutil.move(template_app_dir, output_app_dir)


def _update_settings_with_project_name(output_dir, project_name, app_name):
    settings_file = os.path.join(output_dir, project_name, "settings.py")
    _replace_file_with_project_name(settings_file, project_name, app_name)


def _update_manage_file_with_project_name(output_dir, project_name, app_name):
    manage_file = os.path.join(output_dir, "manage.py")
    _replace_file_with_project_name(manage_file, project_name, app_name)


def _replace_file_with_project_name(filename, project_name, app_name):
    with open(filename, 'r') as f:
        content = f.read()
        new_content = content.replace(_TEMPLATE_PROJECT_NAME, project_name)
        new_content = new_content.replace(_TEMPLATE_APP_NAME, app_name)
    with open(filename, 'w') as f:
        f.write(new_content)


if __name__ == '__main__':
    parser = argparse.ArgumentParser("Django project generator")
    parser.add_argument(
        "-p", "--project-name", dest="project_name",required=True,
        help="project name")
    parser.add_argument(
        "-a", "--app-name", dest="app_name", required=True,
        help="default django application name")
    parser.add_argument(
        "-o", "--output-dir", dest="output_dir",
        help="output directory for generated project")
    args = parser.parse_args()
    _generate_project(args.project_name, args.app_name, args.output_dir)
