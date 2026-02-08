import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { MusicProvider } from './components/romance/MusicProvider';
import RomanticLayout from './components/romance/RomanticLayout';
import Home from './pages/Home';
import OurStory from './pages/OurStory';
import WhyILoveYou from './pages/WhyILoveYou';
import FeelMyLove from './pages/FeelMyLove';
import Proposal from './pages/Proposal';
import LoveLetter from './pages/LoveLetter';
import Forever from './pages/Forever';

const rootRoute = createRootRoute({
  component: RomanticLayout,
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

const ourStoryRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/our-story',
  component: OurStory,
});

const whyILoveYouRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/why-i-love-you',
  component: WhyILoveYou,
});

const feelMyLoveRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/feel-my-love',
  component: FeelMyLove,
});

const proposalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/proposal',
  component: Proposal,
});

const loveLetterRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/love-letter',
  component: LoveLetter,
});

const foreverRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/forever',
  component: Forever,
});

const routeTree = rootRoute.addChildren([
  homeRoute,
  ourStoryRoute,
  whyILoveYouRoute,
  feelMyLoveRoute,
  proposalRoute,
  loveLetterRoute,
  foreverRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <MusicProvider>
      <RouterProvider router={router} />
    </MusicProvider>
  );
}
