# Mini Page Builder App

## Overview

This is a simple React-based powered by Vite, A Mini Page Builder app that allows users to drag and drop components onto a blank page, configure them, and visualize the result in real-time.

Deployed Application: https://mini-page-builder-orcin.vercel.app/

## Table of Contents

- [Mini Page Builder App](#mini-page-builder-app)
  - [Overview](#overview)
  - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [Components](#components)
      - [1. `PageContainer`](#1-pagecontainer)
      - [2. `DraggableElement`](#2-draggableelement)
      - [3. `Sidebar`](#3-sidebar)
      - [4. `CustomModal`](#4-custommodal)
    - [Flowchart](#flowchart)
      - [1. `User Interaction`](#1-user-interaction)
      - [2. `Configuration`](#2-configuration)
      - [3. `Save Changes`](#3-save-changes)
      - [4. `Export Functionality`](#4-export-functionality)
    - [Architecture](#architecture)
      - [1. `Drag-and-Drop`](#1-drag-and-drop)
      - [2. `Configuration`](#2-configuration-1)
    - [Communication](#communication)
    - [License](#license)
### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/PawanEpisode/MINI-PAGE-Builder.git

2. Navigate to the project directory:
    ```bash
   cd MINI-PAGE-Builder

3. Install dependencies:
    ```bash
    npm install

### Usage
This application has been created using Vite.
1. To run the app locally, use the following command:
    ```bash
    npm run dev

This will start the development server, and you can access the app in your browser at http://localhost:5173.


### Components
#### 1. `PageContainer`
* The main component that renders the blank page and handles drag-and-drop functionality.
* Manages the state of elements on the page.
* Allows users to configure and save changes.

#### 2. `DraggableElement`
* Represents a draggable component that can be added to the page.
* Displays a preview of the component with a grip icon.
* Supports drag-and-drop functionality.

#### 3. `Sidebar`
* Represents a Sidebar component that consists of three DraggableElement and a Export Button.
* Displays three draggable elements like Label, Input and Button respectively which can be dragged in the container as a template.
* Use Export Button to export the configuration of all the draggable elements in the page container as a JSON config file.

#### 4. `CustomModal`
* Displays a modal for configuring a component.
* Prompts the user for configuration details such as X and Y coordinates.


### Flowchart
The flowchart illustrates the sequence of actions within the app:

#### 1. `User Interaction`
* Users drag and drop elements from the sidebar onto the blank page. 
* When a user drops an element on the page, it will open a modal and ask for configuration. X and Y coordinates are auto filled with the mouse position with the point the element was dropped.
* When the user clicks on save changes, the element are drawn
on the page on x and y coordinate with the configurations entered by the user.
* Users are able to drag the elements on the page to change its position as well.
* When a user clicks any element on a page it gets selected. A red colored border appears around the element.
* Once the user selects an element and press `Enter`, it opens the same modal and the user are able to update the configuration.
* Once the user selects an element and press `Delete`, it gets
deleted.

#### 2. `Configuration`
* Users configure X and Y coordinates in the modal.
* Configured elements are displayed on the page.

#### 3. `Save Changes`
* All the changes are stored in local storage and the save happens automatically.
* So whenever a user either adds/updates/deletes an element or moves an element, it gets automatically persist to local storage.
* Users can see the updated page with configured elements.

#### 4. `Export Functionality`
* Users can use Export Button in the sidebar to export the current page configuration to a JSON file.
* This feature allows for easy sharing of page layouts or creating backups.

### Architecture

The app follows a component-based architecture using React. The main components (`PageContainer`, `DraggableElement`, `CustomModal`) work together to enable the drag-and-drop functionality and configuration of elements.

#### 1. `Drag-and-Drop`
* `DraggableElement` initiates drag-and-drop functionality.
* `PageContainer` handles the drop and updates the state.

#### 2. `Configuration`
* Clicking on an element and pressing Enter triggers the `CustomModal`.
* Configuration changes are communicated to `PageContainer`.

### Communication
* `PageContainer` communicates with child components to manage the state.
* Components interact with each other through props and callbacks.

### License
* This project is licensed under the MIT License.