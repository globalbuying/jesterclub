import React, { useState } from 'react';
import { Scroll, Clock, Quote, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import { Logo } from '../Logo';

export const History: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="container mx-auto px-6 py-16 animate-fade-in max-w-4xl">
      <div className="flex items-center gap-4 mb-10">
        <div className="p-3 bg-oxford text-white rounded-full">
            <Clock size={32} />
        </div>
        <div>
            <h2 className="text-4xl font-serif text-oxford">Club History</h2>
            <p className="text-cambridge font-bold uppercase tracking-widest text-sm">A Legacy of Excellence</p>
        </div>
      </div>

      <div className="bg-white shadow-xl p-10 border-t-4 border-oxford rounded-b-lg">
        {/* Existing Content - Gareth Quarry */}
        <div className="float-right ml-8 mb-4 w-1/3">
             <img src="https://www.thejestersclub.org//wp-content/uploads/2014/08/JP35-19320301-1932-Cambridge-Univ-Fives-Team-Jock-Burnet-second-from-right.jpg" alt="Vintage Sport" className="rounded shadow-md grayscale hover:grayscale-0 transition-all duration-500" />
             <p className="text-xs text-gray-500 mt-2 text-center italic">The early years of the club</p>
        </div>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6 first-letter:text-5xl first-letter:font-serif first-letter:text-oxford first-letter:mr-2 first-letter:float-left">
          Jock Burnet founded the Jesters Club in April 1928 while still a pupil at St Paul’s School in England. Initially a cricket club (which still survives separately today), Jock swiftly developed the idea of a similarly peripatetic club to play Rugby fives and squash. The new club was originally known as ‘The Jokers’, but at the suggestion of Jock’s father changed its name to ‘The Jesters Squash Rackets and Fives Club’.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
           So that was Rugby fives and squash up and running, with Eton fives being added in 1931, real tennis in 1932 (when the Club adopted its abbreviated current name) and rackets in 1937.
        </p>

        <div className="bg-blue-50/50 border-l-4 border-cambridge p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-3">
                <Scroll className="text-cambridge flex-shrink-0 mt-1" size={24} />
                <div>
                    <h4 className="font-serif text-xl text-oxford mb-2">The Jester Spirit</h4>
                    <p className="italic text-gray-700">
                    Rule two of the original Club’s rules stated ‘that the purpose of the Club shall be to play in a spirit not unworthy of the name of the Club’. This spirit is admirably summed up in Jock’s own words as showing “an intention to get away from the serious nature of competitive games where the result may be thought more important than the enjoyment of the players”.
                    </p>
                </div>
            </div>
        </div>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Jock played in the first recorded match (Rugby fives) in December 1928 against Alleyn Old Boys. Thereafter the Club grew rapidly and today numbers several thousand members with branches in the UK, USA, Canada, South Africa and Australia.
        </p>

        <h3 className="text-2xl font-serif text-oxford mt-12 mb-6 border-b border-gray-100 pb-2">Jock Burnet</h3>
        
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
            On graduating from Cambridge University where he was awarded his Half Blue for Rugby fives in 1932, Jock became a schoolmaster and, when not on a fives court, an editor. War time service on the Air Crew Selection Board helped him build his prodigious knowledge of Britain’s public schools and led to his appointment as editor of the ‘Public Schools Year book’, a post he held for more than 40 years, prior to becoming Bursar and Fellow of Magdalene College, Cambridge. His reputation led to him being appointed governor of no fewer than five significant public schools.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
            His attachment to Magdalene and to Cambridge enabled Jock to nurture many generations of Rugby fives and other Cambridge sports-men and women. I vividly remember a letter addressed in Jock’s legendary hand awaiting me at college on my first day at Cambridge and in which one ‘Jock’ invited me for drinks at his nearby Selwyn Gardens home that very evening. Intrigued, I attended at the due time to have set before me both a sherry and a whisky decanter. Electing for the latter, I stayed some three hours and thereafter was typically to visit Jock several nights a week in term time for three years to imbibe and discuss anything and everything. As he had been for past (and was to become for future) generations of undergraduates, Jock was a real mentor.
        </p>

        <p className="text-lg text-gray-700 leading-relaxed mb-6">
            He was supported in all he did, both for the Jesters and outside, by his indomitable wife, Pauline. Chair of the local health authority and a magistrate, her superficially stern appearance belied a gentleness. Together Jock and Pauline entertained generations of undergraduates, Jesters and visiting teams to decanterfuls of sherry in the evenings and vats of chicken, rice and peas for lunch.
        </p>
        
        <blockquote className="relative p-8 my-10 bg-gray-50 rounded-lg text-lg italic text-gray-800 font-serif leading-relaxed">
            <Quote className="absolute top-4 left-4 text-cambridge/20 rotate-180" size={48} />
            <p className="relative z-10">
                "Each Sunday in term time Jock would sit in his armchair wearing his embroidered bedroom slippers and Marks and Spencer’s pullover, surrounded by a sea of undergraduates, looking like one of those benign and beaming archdeacons immortalised by Osbert Lancaster. He knew just who to introduce to whom, and took a delight in friendships which sprang from these introductions"
            </p>
            <footer className="mt-4 text-sm font-bold text-oxford not-italic flex items-center gap-2">
                <div className="h-px w-8 bg-oxford"></div>
                Dennis Silk, Obituary in The Independent
            </footer>
        </blockquote>

        <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Jock oversaw the first half century of the Club’s dramatic growth and presided over its 50th Anniversary. He died in 1989.
        </p>

        <div className="flex justify-end mt-4 mb-16">
            <div className="text-right">
                <p className="font-serif font-bold text-xl text-oxford">Gareth Quarry</p>
                <p className="text-xs text-cambridge uppercase tracking-[0.2em] font-bold">Jester</p>
            </div>
        </div>

        {/* Separator */}
        <div className="flex items-center justify-center my-16 opacity-30">
            <div className="h-px bg-oxford w-1/3"></div>
            <div className="px-4"><BookOpen size={24}/></div>
            <div className="h-px bg-oxford w-1/3"></div>
        </div>

        {/* New Content - Robert Dolman */}
        <article className="prose prose-lg max-w-none text-gray-700">
            <h2 className="text-3xl font-serif text-center text-oxford mb-2 uppercase leading-tight">Jock Burnet and the Jesters Club</h2>
            <h3 className="text-xl font-serif text-center text-gray-500 mb-12 italic">The first seventy five years</h3>
            <p className="text-center font-bold text-oxford mb-8">By Robert Dolman</p>

            <div className="float-left mr-8 mb-4 w-48 text-center">
                 <div className="w-40 h-40 mx-auto bg-oxford rounded-full flex items-center justify-center border-4 border-double border-cambridge mb-2">
                    <Logo className="w-32 h-32" />
                 </div>
                 <p className="text-xs text-gray-500 italic">Jock Burnet, pictured on the occasion of the Jubilee</p>
            </div>

            <p className="mb-6">
                Uncle Remus once said “never start nuffin’… it may always turn into summat”. So it was that Jock Burnet – pictured – on the occasion of the Jubilee of The Jesters Club in 1978, reflected with some amazement that the gathering that he had assembled in late December 1928 when he and three of his school friends from St Paul’s played a rugby fives match at Dulwich had turned into the “summat” that The Jesters Club had become 50 years later. They lost that match but such was their enjoyment that they immediately decided to form a Club, enrol members from other sources and compile a small fixture list. Whilst Jock reminiscing 50 years later and remembering these origins was tempted to sing “I didn’t mean to do it”, all of those now involved with the Club are enormously grateful to him that he did.
            </p>

            <p className="mb-6">
                As to the origin of the name, The Jesters Cricket Club had been formed in April 1928 under the original name of The Jokers Cricket Club but shortly changed its name to The Jesters Cricket Club at the suggestion of Jock’s father when its President Pelham Warner pointed out that a club of cricketing golfers already existed under the name of The Jokers. The purpose of The Jesters Cricket Club was “to play cricket in a spirit not unworthy of the name of the Club” and it was with this sporting purpose in mind that Jock felt that his newly formed club (with the kind permission of the Jesters Cricket Club as its Minute Book records) should be called The Jesters Club.
            </p>

            <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Christmas 1928</h4>
            
            <div className="float-right ml-8 mb-4 w-64">
                <img src="https://images.unsplash.com/photo-1531313386760-49275fb1329a?q=80&w=400" alt="Vintage sportsman" className="rounded shadow-md grayscale" />
                <p className="text-xs text-gray-500 mt-2 text-center italic">Frank Strawson, early Chairman</p>
            </div>

            <p className="mb-6">
                Its first two matches (both rugby fives) were played in the Christmas holidays, the first on 29 December 1928 against Alleyn Old Boys at Dulwich and the second against the Old Paulines and, of the five players who played for the Club in these matches, four were still schoolboys (Jock, P G E Nash, V E Oundjian and J G Richards) and one an undergraduate (G N Smith); all Paulines. That first season in 1928/9 seven rugby fives matches were played and also their first squash match (against the Bank of England at Roehampton), a game of which none of them had had more than a month’s experience and the result was inevitably emphatic! The first official Committee Meeting is recorded as having taken place in the Walker Library at St Paul’s on 12 July 1929 where the annual subscription of two shillings and sixpence was fixed.
            </p>

            <p className="mb-6">
                The second season (1929/30) coincided with Jock’s going to up Cambridge as a freshman where both the fixture list and the membership blossomed. Frank Strawson was one of these members and he recorded later “in the 1929/30 season the second squash fixture was fulfilled and, although the result was again overwhelming, it did indicate some improvement in as much as in making my first appearance I managed to register the initial individual success at squash in the history of the Club. I hope my colleagues on that occasion will forgive me when I say that ours was quite the worse team with which I had ever been associated! However we felt that there were great possibilities in our idea of an organised wandering Club if we could add materially to our playing strength”.
            </p>

            <p className="mb-6">
                This duly happened and during that season the Club played 21 rugby fives matches and 18 squash matches. Many new members were enrolled including Edward Snell (destined to be a finalist in the amateur championship as well as leading the Club’s team on its first transatlantic tour early in 1934), two famous rugby half backs (W J A Davies and H Coverdale) and the Cambridge captain Tom Hayward (who claimed that he became a member during a history lecture!). The Club inaugurated the Public School rugby fives competition and with the election of Arthur Hazlerigg to the Committee in 1931 eton fives was added to the Club’s activities.
            </p>

            <p className="mb-6">
                By 1931/32 over 80 matches were played and such was the enthusiasm of those involved that by 1934 the squash fixtures alone were in the region of 200 matches paralleled to a lesser extent by both rugby fives and eton fives. Jock was later to write “it was the good fortune of the Club to have sprung into a larger sphere of activity just when there was most demand for it – first class players were glad of matches from which the grimness of the competitive spirit was withdrawn and the other members were equally glad of the chance of valuable experience provided by what was, if not deadly serious, at least genuine match play. Clubs and schools were happy to entertain our teams. As a wandering Club, we depended on the hospitality of those who owned courts, which was given with unparalleled generosity for which we can never be too grateful”.
            </p>

            <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Recorded in the Times</h4>
            <p className="mb-6">
                In those days, the results of many of the matches were faithfully recorded in a weekly column in The Times in part through the kind offices of an early Honorary Member F B Wilson (one of the great athletes of his day, said by some to be able to defeat anyone at Queen’s Club at table tennis using a bread knife for a racket!”); the Club in this column was often referred to as “the Ubiquitous Jesters”. Committee meetings had graduated from St Paul’s library to such diverse establishments as Queen’s, The Bath Club, the RAF Club, the Swan at Hammersmith and the Mayfair in Down Street (run by the celebrated boxer Bombardier Wells).
            </p>

            <p className="mb-6">
                So many people contributed to the Club’s growth during this pre war period in different capacities and in different parts of the country that it is invidious to try to single out any of them. Nevertheless it was the early committee (Jock himself as Honorary Secretary, Tom Hayward as Honorary Treasurer and Frank Strawson) that masterminded and controlled this expansion. Jock remained Secretary until 1937 and again from 1947 to 1952 and by 1934 it was decided that they should have a permanent Chairman which role Frank Strawson occupied (with a break during the war) until his death in 1953.
            </p>

            {/* EXPANDABLE SECTION */}
            <div className={`transition-all duration-1000 overflow-hidden ${isExpanded ? 'max-h-[50000px] opacity-100' : 'max-h-0 opacity-0'}`}>
                
                <div className="float-left mr-8 mb-4 w-64">
                    <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=400" alt="Military service" className="rounded shadow-md grayscale" />
                    <p className="text-xs text-gray-500 mt-2 text-center italic">Brothers Douglas and Brian Burnett</p>
                </div>

                <p className="mb-6">
                    In these pre war years, both tennis and rackets were added as games played by the Club and representatives both from the Senior Common Rooms of Oxford and Cambridge (JC Masterman from Oxford in 1936 and Owen Wansbrough Jones from Cambridge in 1938) and also the three services (brothers Douglas and Brian Burnett – pictured - for the Army and the RAF respectively and Geoffrey Vavasour for the Navy) joined the Committee. In 1934 the Minute Book laconically records that HRH The Prince of Wales became a member of the Club (he remained a member throughout his life and as King Edward VIII was the Club’s Patron during his reign). The Minutes at this time also record a concern to ensure that squash did not predominate; the interests of the other games were carefully nurtured and encouraged and the Committee tried to elect members who would play more than one of the Club’s games and prove a link between its different games and players.
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">The first tour</h4>
                <p className="mb-6">
                    At the beginning of 1934 the Club, only five years after its foundation, sent a squash rackets team to the USA and Canada, the first such tour ever undertaken by a Club side. The difference in the size of the court and the balls took some getting used to but they gradually prospered, Edward Snell beating fellow Jester John Gillies in the final of the Canadian championship and Snell defeating the reigning US champion Beekman Poole at the Harvard Club (this was apparently in the first ever match ever broadcast on the radio!). The results were less important however than the friendships that ensued such was the kindness and hospitality showered on the team throughout the tour. As a result, the American national team toured England in 1935, with the Club being asked to organise their tour. These tours forged the special link with our North American friends which led to the creation of the separate branches of The Jesters in both the United States and in Canada in 1948.
                </p>

                <p className="mb-6">
                    The war brought all of the Club’s activities to an end and a toll of very heavy casualties, with over 40 members killed on active service from a membership of less than 400. Jock was to write “it has been remarked that happy is the nation that has no history and in a sense this may be applied to The Jesters Club which had to re-establish itself after the war”. Things got going slowly but fortunately with Jock back as Secretary and Frank Strawson - pictured - as Chairman normal service was resumed, despite many of the London courts having been destroyed during the war, a distinct lack of both squash and fives balls and the difficulty of tracing some of the members. During this post-war period, the Club continued to ensure that the Committee was a mixture of ages and Jock opined that much of the Club’s success thereafter was due to its insistence on bringing members on to the Committee at a young age and combining their up to date outlook with the experience of the number of older members. This spectrum of ages throughout the Committee and the membership continues today; the Club is essentially a playing club but any member who has given the Club more than 10 years playing service and no longer plays still remains a member whether or not he still pays a subscription (although this has not been heavily advertised!).
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Other sports</h4>
                <p className="mb-6">
                    The close connections between the Club and the Jesters Cricket Club continued after the war and for several years annual cricket matches were played between the two clubs, usually at St Paul’s. Sadly the link with the Cricket Club fell away later and the matches were discontinued. It was never proposed to include cricket as one of the Club’s official sports but the records show that Jock played regularly for the Cricket Club; the writer hesitates to mention that Jock’s batting average in the results he has seen did not achieve double figures but he did score 25 not out in a victory against the Brookwood Mental Asylum!
                </p>
                
                <p className="mb-6">
                    At this time, the Committee did consider whether to extend the Club’s official sports to both lawn tennis and golf but both of these proposals were turned down on the advice of the leading lawn tennis and golf players who were members of the Club (although a most enjoyable golf meeting is now held annually). The Club’s official activities have been thus limited to “games in courts with walls”. At the same time it was decided that the detailed results which had meticulously been recorded pre-war need no longer be maintained, as “the main object of the Club was not to notch up rows of successes but through the individual efforts of members to promote a feeling of friendship and good sportsmanship amongst the members playing all five games and amongst their opponents”.
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Presidential roll call</h4>
                <p className="mb-6">
                    The Club throughout his history has been fortunate to have a distinguished roll call of Presidents, first Lord Wodehouse (later the Earl of Kimberley) sadly killed in the war; then Lord Lyle from 1939 to 1954, then Lord Aberdare in 1954 until his untimely death in a motoring accident in 1957, then from 1957 to 1977 Sir Owen Wansbrough-Jones, thereafter Jock himself and latterly Christopher Campbell, followed by Sir Lawrence Verney and currently David Vaughan.
                </p>

                <p className="mb-6">
                    The writer only knew them from Wansbrough (as he was universally known) onwards. Wansbrough was unfailing kind and generous to all newcomers to the Committee and took a genuine interest in them; he was the best of dinner companions and the writer remembers sitting next to the great man at the President’s Dinner (a tradition he kindly inaugurated) on one occasion when Wansbrough, mid-reminiscence, slid quietly off his chair and onto the floor. Totally unabashed and without pausing for breath, he continued his story as though nothing had happened whilst those on either side of him dusted him down and eased him back into his chair. On Wansbrough’s death in 1977, the Committee were delighted when Jock kindly (but with protestations about his unsuitability!) agreed to become our President and it was particularly fitting that he did so in the year of the Club’s Jubilee (of which more later). When ill health forced Jock to step down, Christopher Campbell (who had nobly been our faithful Treasurer since 1956) succeeded him and many Jesters from near and far will recall the warm hospitality of Christopher’s house and court at Northfields (a tradition happily continued with wine and music by his son).
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Verney takes over</h4>
                <div className="float-right ml-8 mb-4 w-64">
                    <img src="https://images.unsplash.com/photo-1544985226-63320c8066a4?q=80&w=400" alt="Lawrence Verney" className="rounded shadow-md grayscale" />
                    <p className="text-xs text-gray-500 mt-2 text-center italic">Lawrence Verney</p>
                </div>
                <p className="mb-6">
                    On Christopher’s death Lawrence Verney – pictured - (a former Chairman of the Committee) kindly took over and those who know Lawrence (unless they have appeared before him in the dock at the Old Bailey over which he presided) will have happy memories of his involvement; of battles destined to end 9-8 in the fifth, of singing Gilbert and Sullivan around his piano at Chester Square and of the wonderful speeches he made at our dinners and events. He has a great sense of timing, as was witnessed by the touring American Jesters one morning when he entertained them to a glass of champagne in his chambers at the Old Bailey prior to conducting a murder trial which they sat through until he adjourned this after an hour, presumably to give them the chance to escape to their lunch appointment. Our present President David Vaughan, had he ever been a judge (which he admits is extremely unlikely) would have been hopeless at it, as he is far too kind to be prepared to sentence anyone. Like Jock before him, his modesty and generosity of spirit have endeared him to all our membership, particularly the young in whom he has always taken a great interest. At 82, he remains an inspiration to us all, continuing to play various sports and enjoy life (without ever having been near a gym!).
                </p>

                <p className="mb-6">
                    Although the writer never knew Frank Strawson, Jock always claimed that Frank was the leading light behind the Club for all the years in which he was involved and it is only fitting that, following his sudden death on court in 1953, the Club has since opened its season with the Frank Strawson Memorial match and dinner in his memory. Initially this was a squash match between the Jesters and the Squash Rackets Association but in latter years it has blossomed into an evening when Jesters teams from each of the five games play against their national associations and then gather together for a delightful dinner of reminiscence and friendship at Queen’s; this year over 100 people attended.
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Death on the court</h4>
                <p className="mb-6">
                    Frank Strawson’s death on the squash court was sad because he was far too young to suffer this cruel fate. Maurice Baring, our distinguished Chairman from 1963 to 1971 and a doyen of most of our games, expressed the view more than once that there could be no better place to die than on the tennis court at his beloved Petworth and so it nearly came to pass when, aged 88, he suffered an attack on court having just struck a stylish winning gallery. Maurice would undoubtedly have been content to meet his maker there and then but his playing partners summoned medical assistance (probably in the hope of reviving him in time for their contest the following week) and he died in hospital shortly afterwards.
                </p>

                <p className="mb-6">
                    Looking back, it is a testament to Jock that over the years so many busy and important people happily and enthusiastically have sat on the Jesters Committee and have been prepared to help in whatever way was required. The writer well remembers consulting Jock, when he was asked by Lawrence Verney to take over as Hon Secretary from Michael Morton; Jock’s advice was that when you are young, if you are offered responsibility, even if you are worried about the time commitment and your capability, you should accept it, as invariably you will derive so much more enjoyment and stimulation out of the responsibility that you ever imagined at the outset. This was certainly the case for the writer and hopefully for others. The writer intended to quote Jock’s words to Gareth Quarry when asking Gareth to take over from him; but Gareth needed no persuasion, as he was one of several Cambridge rugby fives captains who Jock had taken under his wing whilst at Cambridge and would do anything for him. The writer was accordingly able to tell the Committee in the words of Frank Richards from Bunters Last Fling “My esteemed chums” (murmured Hurrie Jamset Ram Singh), “this is not an occasion for looking the gift horse in the mouthfulness”. I think the writer, Gareth and our current secretary Michael Rowan would all agree that, if you are to be press ganged into being secretary of something, there could be no nicer secretaryship to fill than that of the Jesters. On handing over this post, the writer in his Report noted the unexpected benefits of the role to be:-
                </p>
                <ol className="list-decimal pl-6 mb-6 space-y-2">
                    <li>Close communion with the various members of the Committee, whose number regularly included some of the finest minds (and/or bodies) in the land (in retrospect, did he really think that!).</li>
                    <li>A constant supply of mail which was invariably more interesting either than the assorted unsolicited bumph that falls onto the doormat or than business correspondence which demands an instant reply. The Jesters postbag was normally fund to read, never too demanding and could usually be passed onto someone else on the Committee for a reply!</li>
                    <li>The delight of having an assistant who was invariably more important than you, who actually ran the Club but fittingly retained his anomalous title and lowly rank. In the writer’s day this applied to Brian McGivern and thereafter to Michael Rowan, who now serves us so brilliantly as our Secretary.</li>
                    <li>The likelihood that there would be a knighthood or some other honour in it in due course; word from the Palace is still awaited!</li>
                </ol>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Jock’s legacy</h4>
                <p className="mb-6">
                    Jock’s legacy has been to leave the Jesters in excellent heart. A full programme of all our sports (numbering around 200 matches in all) takes place throughout the season, with particular emphasis on matches against schools and universities. Sadly the tradition at schools and universities of sitting down with one’s opponents for some food, drink and good conversation after a hard fought contest seems to be waning but we think this is an important ingredient of any contest and we do our best to keep this going. The writer has just attended the annual Oxford weekend where 80 of us across the spectrum of our sports sat down to dinner in Wadham afterwards; he was disappointed to learn that this is the only occasion in the season (apart from the Varsity match) when such dinners take place. The whole point of our matches is to try and match our playing strength with those of our opponents and this normally works very well. Whilst we have always numbered amongst our ranks various of the amateur champions at our various sports, the aim is not necessarily to win but to have a close contest (it should be added that, where possible, we do mainly win against schools, as otherwise they might no longer wish to play us!). With squash having become an open game, it is no longer possible or suitable for us to recruit the top players in the country to our ranks but many do join us once they have stepped down from the professional game in order to put something back at amateur level into the sport that they love.
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Jesters Trophy</h4>
                <div className="float-left mr-8 mb-4 w-64">
                    <img src="https://images.unsplash.com/photo-1577705197767-1605466847c5?q=80&w=400" alt="Peter Chalk" className="rounded shadow-md grayscale" />
                    <p className="text-xs text-gray-500 mt-2 text-center italic">Peter Chalk</p>
                </div>
                <p className="mb-6">
                    Squash is still our major game, with 80 or so matches a season both at home and abroad. When squash went open in the late 1970’s, it was no longer possible or suitable for the Club to recruit the country’s top players to play for us (although many become members when they have stepped down from the professional game) but the advent of professionalism in many ways merely reinforced the use and purpose of the Club for those many amateur players who wanted good competition but did not have the time or inclination (and perhaps also the talent!) to adopt a professional approach. An annual amateur tournament still exists (the Jesters Trophy), run by Peter Chalk - pictured; with amateur status abolished, Peter alone decides who qualifies to play!
                </p>
                
                <p className="mb-6">
                    Both disciplines of fives remain amateur games par excellence and this shines through in their attitude of those involved with their enjoyment of their sports. With little funding and scant publicity, they thrive on the enthusiasm of those concerned; they remain a great advert for amateur sports and the Jesters continues to play a major role in both.
                </p>

                <p className="mb-6">
                    Tennis, has blossomed within the Club; many squash players have taken it up and, with Radley about to join Conford and the Oratory as having a court and Eton hoping to build one, it may well in future become a school game in the way that rackets did many years ago.
                </p>

                <p className="mb-6">
                    At rackets we boast the current and several previous the World Champions amongst our ranks. Matches within all the racket playing schools thrive and we are proud to sponsor the Amateur Doubles.
                </p>

                <p className="mb-6">
                    Whilst the internet and technology may be changing most of our lives, we still circulate our annual report, fixture list and list of members in paper form, as this is what most of our members prefer. We do now have a website (www.thejestersclub.org; user name jester) where the password is “jock”; we hope he would have approved. On hearing of our website and portal, our President said that he would like to visit the site but was not sure where it was and in particularly, whether or not it was within the congestion charge zone and whether he needed a hard hat; (he remains oblivious of technology, an attribute of which many secretly are jealous!).
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Contentedly playing</h4>
                <p className="mb-6">
                    The annual reports of the Club over the years basically reflect members contentedly playing their games, a gradual expansion of members and activities but otherwise little change. This lack of ambition would be castigated in business circles where change appears to be an essential ingredient (but perhaps somewhat complacently) the Club takes quiet satisfaction in the “more of the same”; its growth and prosperity having arisen naturally and organically via its core values rather than through business plans, mission statements and global strategies (of which we have none!). The average length of our AGM has remained less than 5 minutes for over 40 years; the record being 1 min 40 seconds, it being reported that it took longer to find the barman than to hold the meeting! In the writer’s experience, the only time a member was foolhardy enough to raise queries at the AGM led him being invited to join the Committee.
                </p>

                <p className="mb-6">
                    Pleasingly, the Club’s finances are in fine fettle; subscriptions have risen gradually over the years to their current level of £20 per annum and from its modest beginnings (in 1930 the balance sheet showed a surplus of 4/10½d) the Club now has a capital fund of well over £100k. The writer is tempted to opine that much of this value has occurred through an investment policy of masterly inactivity by buying and retaining a few well chosen equities over the years but the result has also been helped enormously by the care and prudence of successive Treasurers to whom the Club is indebted. As a wandering club, we have been fortunate to have very few overheads and hence we have been able to devote our income to our matches, entertaining our opponents, enabling impecunious younger players to participate and generally supporting our games. Jock certainly did not intend the Club to be wealthy and the Committee accordingly think it right to spend its annual income but, having build up the current strong capital base, intend to preserve this as a foundation for the future.
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Developing internationally</h4>
                <p className="mb-6">
                    One enormously happy area of growth over the years has been the addition to the Club of its branches overseas, in the USA (1948), Canada (1948), SA (1957) and Australia (1998).
                </p>

                <p className="mb-6">
                    The American Ned Bigelow had been made a member of the Club in the 1930’s on his frequent visits to England and it was Ned who, with John Humes, started the US branch in 1948, organising an annual weekend of English and American squash (first at the New York Racket Club and later in Philadelphia, Tuxedo and Connecticut, Teddy Ketcham wrote the byelaws and a Membership Committee was formed. Originally only squash players were involved but in 1957 the scope was widened to include court tennis and rackets and their membership now extends across the States. Their annual meeting continues to be the highlight of their year and remains a splendid jamboree of sport, cocktails and good companionship. Unlike the UK where candidates are selected young on the basis that they will play (and hopefully, once elected after their three trial games, manage) matches for the Club, membership of the US branch has traditionally been restricted to ten members a year and has been bestowed on individuals who have already achieved and contributed much. As such, membership of the US Jesters is a far greater honour than in the UK and the US Jesters are a more august and somewhat older group than their UK counterparts. As a result, Jesters matches in North America have been few and far between but, gently chided and cajoled by the UK Committee and helped by the spread of their membership across the States, more local matches against schools and universities are now played and several younger members have been elected. Sadly the doyen of the US Jesters Teddy Ketcham died recently but he has been replaced as the US representative by the sprightly Carter Ferguson.
                </p>

                <p className="mb-6">
                    Various Canadians were elected Jesters in the 1930’s but the Canadian branch was not formed until 1948. It started in the east in Toronto, Hamilton, Montreal and Quebec but the Vancouver and Victoria chapter were formed shortly afterwards and thereafter it spread to the provinces both of the Prairies and the Atlantic so that it is now a truly coast to coast organisation. Each area has its local committee, with Michael Jackson from Vancouver having taken over from Barry Grant of Toronto the chairmanship of the whole thereby demonstrating the pan Canadian spread of the Club. The Jesters in Canada consist mainly of squash players, with some rackets players from Montreal. One great advantage of the North American game is that their squash doubles game (which is played on a much larger court and with a harder ball) is not only a very fine game in its own right but it also enables squash players careers to continue well past the age at which they might be forced to give up playing singles. As a result, they have yet to restore the real tennis court in Ottawa or to build a new one anywhere in Canada but we are working on this!
                </p>

                <p className="mb-6">
                    In 1956 the South African squash team toured the UK and, as a result, one of their number Bill Whiteley was invited to form a South African branch of the Jesters on his return, which he did in 1957. Because of the great distances between the main squash centres, local committees were formed in Johannesburg (by Bill Whiteley and Mike Rosholt), in Cape Town (by Rex Pennington) and in Durban (by Dennis Dougherty). The late Leo Melvill later led the South African branch by his splendid example and was greatly assisted by David and Doug Barrow and Simon Malone; it is fitting that Leo’s son Michael has recently taken over as Chairman. This year the South Africans celebrated their Jubilee in fine style with many Jesters from overseas attending. The sporting highlight was the opening of a splendid doubles court complex at the Johannesburg Country Club ensuring that a game of squash doubles will thrive in South Africa. As with Canada, the next objective is a real tennis court!
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Australia added</h4>
                <p className="mb-6">
                    It had not originally been thought practicable to form a branch of the Jesters in Australia and indeed the squash fraternity there were not particularly attracted to the idea! However, tennis has different traditions and it was with much enthusiasm that the Australian branch of the Jesters consisting entirely of tennis players (royal tennis in their parlance) was launched by George Limb and Jonathan Buckley in 1998. This select group flourishes in Melbourne, in Sydney and in Tasmania and recently inaugurated their first overseas tour to the USA.
                </p>

                <p className="mb-6">
                    Tours between the various Jesters countries have been a most important part of the Club’s development; the tour to North America in 1934 which laid the foundations of both the US and Canadian branches. Similarly the UK Jesters tour to South African and Rhodesia in 1958 helped the expansion of the Club there; it is noted that, including the travel by ship in both directions, the tour lasted two and a half months! Many happy tours have since been exchanged between the Jester nations, with the hospitality and friendship shown by the hosts on these occasions being legend. An official tour between one of the countries takes place almost every year (with the Americans gearing up for a major jamboree in 2010) but over the years unofficial tours in various of the sports have taken in most of the European countries together with Kenya, Nigeria and Malaysia.
                </p>
                
                <p className="mb-6">
                    Apart from playing our games, members have held an annual dinner at the Royal Automobile Club in Pall Mall over many years and this is always a highlight of the Club’s season. The RAC has in many ways been the traditional home of the Club, as we are fortunate not only to hold our annual dinner there but also our Committee meetings and now the Jesters Trophy. It is a tribute to Jock (and later to his memory) that we have managed to persuade so many eminent speakers from all walks of life to entertain us at our dinner; politicians, archbishops, headmasters, leaders of the armed forces and captains of industry have all been kind enough to grace our gatherings and it was particularly fitting that our Patron did so so charmingly in 2001. He was a squash player in his day and he spoke with passion of his support for our amateur games. He was reminded that he last attended a Jesters function 40 years previously (when the Canadians were touring) but remarked that, if he only turned up every 40 years, he would probably not be called upon in 2041 unless medical science achieved miracles!
                </p>

                <h4 className="text-xl font-serif text-oxford mt-8 mb-4">Golden Jubilee</h4>
                <p className="mb-6">
                    For many, the most memorable of our dinners was that at which Jock spoke on the celebration of our Jubilee in 1978. The Oxford English dictionary has a definition of a Jubilee as being “a year for the remission of sins when absolution may be obtained by a pilgrimage to Rome”. Jock, when questioned on what form the Jubilee should take, was forced to admit that a pilgrimage to Rome was not exactly what he had in mind. He acknowledged that some (although certainly not all) Jesters might well need to be absolved of sin and further as a pilgrimage of some form might well be apt but Rome, for all its other glories, is apparently singularly lacking in those essential ingredients of a true shrine namely squash courts, tennis courts, rackets courts and fives courts and so it was decided that our plans should be centred on London and Cambridge, cities better endowed to cope with our particular devotions.
                </p>

                <p className="mb-6">
                    Jock claimed not to be good at public speaking but those who heard him at our Jubilee Dinner at the RAC in 1978 would unanimously take issue with him; it was one of the most charming and delightful speeches in which he encapsulated the spirit of the Club and that evening. He went on to take the rugby fives court for the last time at Cambridge playing with Lawrence Verney against the two youngest members present! He was also present at the Club’s 60th Jubilee in 1988 again centred on his beloved Cambridge. A E Houseman described Cambridge as “a veritable asylum” but even Oxonians would have to agree that there is no there are no more pleasant place in the land to play sport, eat, drink and make merry.
                </p>
                
                <div className="float-right ml-8 mb-4 w-64">
                    <img src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=400" alt="Jubilee Gathering" className="rounded shadow-md grayscale" />
                    <p className="text-xs text-gray-500 mt-2 text-center italic">75th Jubilee Gathering</p>
                </div>

                <p className="mb-6">
                     The largest Jesters gathering of all took place in 2003 - below - to celebrate our 75th, although sadly our founder was no longer with us for that occasion. An overseas representation of over 180 attended at various times; “from far and near, both fat and thin they came and were a jolly company”. These included some of our new lady members (we hope Jock would have approved, as Pauline was our first lady member).
                </p>

                <p className="mb-6">
                    So much for the history of the Jesters and its current state of health; what shines through is that, without Jock, the Club would not exist and its blossoming and any success that it has achieved is because of him and his example. Some might ask how it was that such a modest and gentle man could exert such an influence on all who met him but it was his very modesty and schoolboy enthusiasm that inspired us and endeared him to all. Basically, he encapsulated the core values of the sports that we play, no attribute being more important than his care and concern for others.
                </p>

                <p className="mb-6">
                    Jock never wanted the Jesters to be important (nor hopefully has it become so) but it is a fitting tribute to him that his Club continues to be as relevant and influential today as it was in those early years. It is a badge of sportsmanship to be worn lightly but with pride and honour. As Jock recalled in one of his speeches, like Wodehouse’s Psmith before him, he had not let success spoil him; when asked what success he had had, he admitted “none at all”. We would disagree; the Jesters Club, amongst many of his other achievements, was and still is a great success of which he could be justly proud. Nevertheless, for him it was not about success; for him, the basis of his Club was epitomised by Hilaire Belloc “"There is nothing worth the wear of winning, but laughter and the love of friends".
                </p>
                
                <p className="mb-12">
                    And so to finish, a sonnet to Jock from one of his Jesters friends which encapsulates Jock and the Club he so loved:-
                </p>

                <div className="bg-gray-50 p-8 rounded-lg border border-oxford/10 text-center font-serif italic text-lg leading-relaxed shadow-inner mx-auto max-w-2xl mb-12">
                    <h5 className="font-bold text-oxford mb-4 not-italic uppercase text-sm tracking-widest">To Jock</h5>
                    <p className="mb-4">
                        “I wonder at my boyhood hero’s fame<br/>
                        And dedicate this sonnet to his name<br/>
                        Remembering the values he imparted<br/>
                        When first to play the game of Fives I started.<br/>
                        When taking part in all those sinew-testers<br/>
                        Which are the currency of sporting Jesters;<br/>
                        The drive, the volley, drop-shot, cut and spin,<br/>
                        It’s making friends that matters, not the win.
                    </p>
                    <p className="mb-4">
                        The fifteenth psalm still hammers in my ear;<br/>
                        If to your neighbour promises you swear<br/>
                        And do not let him down, perhaps you’ll wear,<br/>
                        Someday, a Jesters tie; be asked to dwell<br/>
                        In tabernacles of renown as well<br/>
                        Among the band of those, so very small,<br/>
                        Who always triumph, yet are loved by all.
                    </p>
                    <p>
                        If sportsmen world-wide these precepts now borrow,<br/>
                        Perhaps mankind can all do so tomorrow.”
                    </p>
                    <p className="mt-6 text-sm not-italic font-bold text-oxford">- Robert Dolman</p>
                </div>
            </div>

            <div className="text-center mt-8">
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="inline-flex items-center gap-2 text-oxford border-2 border-oxford px-6 py-3 rounded hover:bg-oxford hover:text-white transition-all font-serif font-bold tracking-wider"
                >
                    {isExpanded ? (
                        <>Read Less <ChevronUp size={20} /></>
                    ) : (
                        <>Read More <ChevronDown size={20} /></>
                    )}
                </button>
            </div>

        </article>
      </div>
    </div>
  );
};