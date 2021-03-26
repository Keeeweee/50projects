if [ $# -eq 0 ]
  then
    echo "Please indicate day number you want to create."
    exit 0
fi

PROJECT=$1

echo "Creating project " "$PROJECT"

PROJECT_PATH="project_$PROJECT"

[ -d "$PROJECT_PATH" ] && echo "Directory $PROJECT_PATH already exists." && exit 0

mkdir "$PROJECT_PATH"
cp -a "template/." "$PROJECT_PATH/"

echo "Done."
