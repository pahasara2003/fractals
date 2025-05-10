# A Mathematical fractals Visualizing app

### About
An interactive web application for exploring the Mandelbrot Set and Julia Set fractals, built with Next.js, Rust (WebAssembly), and TypeScript.This is the first project I used Web Assembly.
Also this is my first try out of Rust. 

## Features

- Real-time fractal rendering using WebAssembly
- Interactive zoom and pan controls
- Dynamic color mapping
- Responsive canvas sizing
- Support for both Mandelbrot and Julia sets
- High-performance calculations using Rust

## Tech Stack

- **Frontend**: Next.js 15, TypeScript, React
- **Backend**: Rust (compiled to WebAssembly)
- **Build Tools**: wasm-pack, webpack

## Prerequisites

- Node.js (v18 or higher)
- Rust (latest stable)
- wasm-pack

## Installation

1. Clone the repository:
```bash
git clone https://github.com/pahasara2003/fractals.git
cd fractals
```

2. Install dependencies:
```bash
npm install
```

3. Build the WebAssembly module:
```bash
cd rust-backend
wasm-pack build --target web
cd ..
```

4. Start the development server:
```bash
npm run dev
```

## Usage

- Use mouse wheel to zoom in/out
- Click and drag to pan around
- Use arrow keys for fine navigation
- Press '+' and '-' to adjust zoom level

## Project Structure

```
fractals/
├── app/               # Next.js app directory
├── components/        # React components
│   └── Canvas.tsx    # Main fractal rendering component
├── types/            # TypeScript type definitions
├── rust-backend/     # Rust WebAssembly source
├── wasm/            # Compiled WebAssembly modules
└── public/          # Static assets
```

## Performance

The application uses Rust compiled to WebAssembly for high-performance fractal calculations, allowing smooth real-time interactions even at high zoom levels.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

## Author

Pahasara Wickramasinghe
