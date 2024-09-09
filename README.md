I really had a ton of fun doing this! =^\_^=

# Highlight something in your project that you thought was especially interesting or significant to your overall implementation.

I love Redux. So much. It's the first thing I install on any project, because at somepoint, you need a way to handle state across multiple layers of components. I don't leave home without it!

# Tell us what you are most pleased or proud of with your implementation.

The animations really sell the overall feeling of the app. It's the little things.

I really like the 'surprise me' button, too!

Neat thing - `some` is a nifty Array function I've never used before! I use it to figure out if I need to show/dim a card on movie <> genre match, on 'displayMovies.tsx'.

# Given more time, what next feature or improvement would you like to add to your project?

UNIT TESTS.

I'd ask the backend team to add genres to the initial pull of the API for movie data - I did some array manupulation to get that working, but I'm aware of the runtime implications, especially if that array gets large. Big-O(n^2) bad.

Becuase of that array manpulation to get genres on the movies for the first pull, sometimes genre is a string and sometimes genre is an object. Same for movies - the type can be a little unclear depending where you are at in that step of the data hydration process. I'd like to revisit that and clean that up.

Any stray //@ts-ignore needs to be removed. But that's life. Classic case of "I know what the type is but-I'm-building-this-quickly-aaaaaaaaaaaaaaaa"

I'm ALSO really cross with RTK Query! On paper it's supposed to handle API calls and load them directly into state, but it kept fighting me and the documentation isn't that great. I had this same issue with my Cat iOS App - it can work for a simple thing, but the instant you pull it out of the sandbox and take it for a spin, it explodes on the side of the road... sigh....

Loading state in Redux is not used. This website needs a loading indicator! (It's a big plus for using RTK Query, as that feature comes built in! SIGH.)

I wanted to use GraphQL! The backend for that API kept listing errors along the lines of "Schema Introspection Failure." Next time!

Learn what Storybook is. I've never used it. :')

# Sources

I walked in knowing I just needed Redux, some array/data manpulation, display logic, and I was golden. I've done this work before. However, I did ref a few things...

- My Redux 101 App - https://github.com/GamesOfSummer/redux-101
- My Cats IOS App for the Card/Animation ideas - https://apps.apple.com/us/app/silver-whiskers/id6470221972
- ChatGPT for simple syntax questions/debugging. It's a great tool that's faster to use than just Google when you are missing a bracket somewhere

# Other notes

I know how to `git rebase` and squash my commits to clean, simple commits that go into a pull request. Since this tests is also a 'sniff test' to verify my authenticity as a software developer, I opted to show a messy git history so y'all can see I am indeed the real deal. :)

I also updated the package.json - I use NCU to manage this. When I saw that eslint conflicted with eslint-config-next, I opted to keep the existing version of eslint. This is something I'd look into at a later date. In this Javascript ecosystem, I keep my finger on the pulse of the package.json!

# Thank you for this opportunity! =^\_^=
