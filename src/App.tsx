import React, { useState } from 'react';
import { Laugh, Loader2, RefreshCw } from 'lucide-react';

type AgeCategory = '5-10' | '10-15' | '15-18' | '18+';

const jokes = {
  '5-10': [
    "Why don't skeletons fight each other? They don't have the guts!",
    "Why did the math book look sad? Because it had too many problems.",
    "What do you call a fake noodle? An impasta!",
    "Why can't you give Elsa a balloon? Because she will let it go!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why was the computer cold? It left its Windows open!",
    "Why can't your nose be 12 inches long? Because then it would be a foot!",
    "What do you get if you cross a vampire with a snowman? Frostbite!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
  ],
  '10-15': [
    "Why don’t skeletons ever fight each other? They don’t have the guts.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Why was the broom late? It swept in.",
    "What do you call cheese that isn’t yours? Nacho cheese!",
    "I told my computer I needed a break, and now it’s frozen.",
    "What’s orange and sounds like a parrot? A carrot!",
    "Why did the bike fall over? It was two-tired!",
    "What do you call a dinosaur with an extensive vocabulary? A thesaurus!",
    "What’s a skeleton’s least favorite room? The living room!",
    "Why don’t oysters donate to charity? Because they’re shellfish!"
  ],
  '15-18': [
    "Parallel lines have so much in common. It’s a shame they’ll never meet.",
    "I couldn’t figure out how to put my seatbelt on. Then it clicked.",
    "Why don’t some couples go to the gym? Because some relationships don’t work out.",
    "I told my wife she was drawing her eyebrows too high. She seemed surprised.",
    "I asked the librarian if the library had any books on paranoia. She whispered, ‘They’re right behind you.’",
    "I have a fear of speed bumps, but I’m slowly getting over it.",
    "I started out with nothing, and I still have most of it left.",
    "What’s the difference between a cat and a comma? A cat has claws at the end of paws; a comma is a pause at the end of a clause.",
    "I used to play piano by ear, but now I use my hands.",
    "What’s the best way to watch a fly fishing tournament? Live stream."
  ],
  '18+': [
    "I asked my wife to let me know the next time she has an orgasm. She said she doesn’t like to bother me when I’m at work.",
    "I’m writing a book on reverse psychology. Don’t buy it.",
    "My wife told me I should do lunges to stay in shape. That would be a big step forward.",
    "I’m trying to lose weight, but it’s not working. Maybe I should start a new diet: ‘Eat Cake, Lose Weight’?",
    "I used to be addicted to soap, but I’m clean now.",
    "I tried to start a hot air balloon business, but it didn’t take off.",
    "I told my girlfriend she was drawing her eyebrows too high. She looked surprised.",
    "I’m reading a book about anti-gravity. It’s impossible to put down.",
    "I broke up with my gym because we just weren’t working out.",
    "I told my wife she was drawing her eyebrows too high. She looked surprised."
  ]
};

function App() {
  const [joke, setJoke] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<AgeCategory>('5-10');

  // Generate a random joke for the selected category
  const generateJoke = (ageRange: AgeCategory) => {
    const selectedJokes = jokes[ageRange];
    const randomJoke = selectedJokes[Math.floor(Math.random() * selectedJokes.length)];
    setJoke(randomJoke);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="flex items-center">
            <Laugh className="w-12 h-12 text-purple-500" />
            <h1 className="text-3xl font-bold text-gray-800 ml-3">JokeGen</h1>
          </div>
          <p className="text-sm text-purple-600 mt-2 font-medium">Created by Shaaz</p>
        </div>

        <div className="grid grid-cols-2 gap-2 mb-8">
          {(['5-10', '10-15', '15-18', '18+'] as AgeCategory[]).map((age) => (
            <button
              key={age}
              onClick={() => {
                setSelectedCategory(age);
                generateJoke(age);
              }}
              className={`p-3 rounded-lg font-medium transition-all ${
                selectedCategory === age
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {age} years
            </button>
          ))}
        </div>

        <div className="bg-gray-50 rounded-xl p-6 min-h-[200px] flex flex-col items-center justify-center relative">
          {joke ? (
            <>
              <p className="text-gray-700 text-center text-lg">{joke}</p>
              <button
                onClick={() => generateJoke(selectedCategory)}
                className="absolute bottom-4 right-4 p-2 rounded-full bg-purple-100 text-purple-500 hover:bg-purple-200 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            </>
          ) : (
            <p className="text-gray-700 text-center text-lg">Click a category to generate a joke!</p>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          Powered by Shaaz's Jokes • Age-appropriate humor for everyone
        </p>
      </div>
    </div>
  );
}

export default App;
