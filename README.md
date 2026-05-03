# Rooted: Interactive Argument Map

Rooted is a web-based visualization dashboard that transforms massive, chaotic Reddit threads (from the `r/ChangeMyView` dataset) into navigable, semantic spatial graphs. By summarizing the "noise" of online discourse, Rooted helps users comprehend complex topics, visualize diverse perspectives, and identify where actual mind-changes (Deltas) occur.

## 🛠 Prerequisites
- **Node.js**: Ensure you have Node.js installed to manage dependencies and run the development environment.

## 🚀 Running the Code

### Install dependencies
```bash
npm i
```

### Start the development server
```bash
npm run dev
```

### View the app
Open the local server address (usually `http://localhost:5173`) in your browser.

## 📊 Dataset Architecture
The project utilizes a multi-layered data fusion approach to link outcomes to context:

- `all/`: The set of raw data (one JSONL per post).
- `pairtask/`: Traces the "change of mind" paths (both positive and negative).
- `op/`: Contains original posts and a boolean flag (`true`/`false`) indicating if the OP changed their mind.

## Data Schema (Node Example)
Each node in our tree follows this specific structure for rendering:

```json
{
  "id": "5",
  "type": "custom",
  "data": {
    "label": "She handled it honestly and reasonably",
    "fullText": "It seems more organic than that. I take her at face value...",
    "isOriginalPost": false,
    "upvotes": 290,
    "depth": 3,
    "parentId": "3",
    "isDelta": false,
    "author": 8989989,
    "datePosted": "..."
  }
}
```

## 🎨 Visual Language & Design Decisions
Inspired by a "Figjam" or whiteboard aesthetic, the UI uses soft edges and organic layouts to make the data feel approachable.

- **Color Coding:**
  - 🟠 Orange: Root Node (The Original Post)
  - 🔵 Blue: Child Nodes (Comments)
  - 🟣 Purple: Delta (A comment that successfully changed the person's view)
- **Visual Encoding:** Node size represents the volume of support (upvotes), while position groups similar arguments closer together (Semantic Clustering).

## 🖱 Interaction & Progressive Disclosure
To minimize information overload, we utilize a "drill-down" approach:

- **Initial View:** Only the original post is visible.
- **Expansion:** Double-click a node to expand the underlying thread.
- **Configuration:** Nodes are adjustable, configurable, and persistent.
- **Undo/Redo:** Ctrl + Z functionality (work in progress refinement).
- **Quality Filters:** Includes an upvote slider, comment depth filters, and a "Delta Toggle" to show/hide successful arguments.

## 🏗 Senior Dev Onboarding: Technical Trade-offs
As we scale this repository, keep these design decisions in mind:

- **The 5-Comment Constraint:** To solve the "100+ comment" readability issue, we currently only render the top 5 comments and their subsequent threads. This is a strategic sacrifice of breadth to ensure the UX remains navigable.
- **Edge Creation:** Users can manually delete and add lines between nodes. While flexible, we are working on making this interaction more intuitive as it currently lacks clear visual cues.
- **LLM Integration (Future):** We plan to use LLMs to categorize "Argument Framings" (e.g., identifying Strawman arguments or $p$ then $q$ logical structures) and provide automated summaries for the labels.

## Lessons Learned  
- Understanding a repo and refactoring is necessarily to scale to more complex tasks, and makes your life easier later.
- Understanding exactly what your intentions are and what information you want to convey to users is vital to creating the visualization. Accessible and helpful user flows are needed.
  

