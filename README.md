# Directory Inspector Utility

A simple Node.js mini project that accepts a directory path from the command line, converts it to an absolute path, and checks whether it exists.

## Features

- Accepts a directory path as a command-line argument
- Converts relative paths to absolute paths using `path.resolve()`
- Checks if the path exists using `fs.existsSync()`
- Shows a usage message if no path is given
- Uses only built-in Node.js modules (no installation needed)

## Requirements

- Node.js (version 14 or higher)

Check if Node.js is installed:

```bash
node -v
```

## Project Structure

```
directory-inspector/
├── directory.js
├── README.md
└── .gitignore
```

## How to Run

1. Download or clone this repository.
2. Open a terminal in the project folder.
3. Run the program:

```bash
node directory.js <directory-path>
```

## Examples

Check the current folder:

```bash
node directory.js .
```

Output:

```
Resolved absolute path: /home/user/directory-inspector
Exists: Yes
```

Check a folder that does not exist:

```bash
node directory.js ./missing-folder
```

Output:

```
Resolved absolute path: /home/user/directory-inspector/missing-folder
Exists: No
```

Run without a path:

```bash
node directory.js
```

Output:

```
Usage: node directory.js <directory-path>
```

If the path has spaces, use quotes:

```bash
node directory.js "My Documents"
```

## How It Works

1. Reads the path from the command line using `process.argv[2]`.
2. Converts it to an absolute path with `path.resolve()`.
3. Checks whether it exists with `fs.existsSync()`.
4. Prints the resolved path and the result (Yes or No).

