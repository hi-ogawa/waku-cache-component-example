# Waku cache components vs slices

This example compares static/dynamic composition patterns based on two approaches, [Waku slices](https://github.com/wakujs/waku?tab=readme-ov-file#slices) and Cache components (implemented by [`vite-plugin-react-use-cache`](https://github.com/jacob-ebey/vite-plugin-react-use-cache/tree/main/packages/vite-plugin-react-use-cache)).

## Current limitations

- Currently Waku SSG doesn't set up middleware, so `vite-plugin-react-use-cache`'s request context based runtime doesn't work.
- Even if the first one is solved, in order to generate a cache of "cache components" during SSG, such components need to be rendered during SSG (e.g. at least one ssg-ed page includes such components). But if that happens, the page is entirely static so there's no granularity.

## My thoughts

The "use cache" pattern is essentially component-level caching with a donut pattern, which works well for granular component optimization. However, to properly integrate this as a framework-level feature (e.g., page-level caching, build-time caching, SSG, etc.), the story becomes more complicated (which likely involves PPR like technique).

For framework-level goals, the slices concept might be a simpler approach overall, providing a more straightforward path to integrate static/dynamic composition at the framework level.
