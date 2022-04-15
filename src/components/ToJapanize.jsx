import React from 'react';
import { useState } from 'react';

export default function ToJapanize() {
  const [form, setForm] = useState({
    encoded: 'Astronomi',
  });

  function japanize(s) {
   
 return (
        s.replace(/ʁ/gi, "r") // ʁ -> r   
        .replace(/ɔ̃/gi, "on") // ɔ̃ -> on (ex : rɔ̃ -> ron)
         .replace(/ɔ/gi, "o") // ɔ -> o (kɑ̃bɔdʒ -> kɑ̃bodʒ)
         .replace(/ø/gi, "ū") // ø -> ū (sjø -> sjū)

         .replace(/[ɛe]/gi, "e") // [ɛe] -> e (ʁɛgl -> ʁegl)
        .replace(/[ɛ̃ɑ̃]/gi, "an") // ɑ̃ et ɛ̃ -> an (ex : rɑ̃ -> ran)
         .replace(/[aeiouy]t\b/gi,(chars) => chars.charAt(0) + chars.charAt(1) + chars.charAt(1) + "o") // vowel + /t/ in coda -> tto (gemination) (ex : bet -> betto, kat -> katto)
         .replace(/[aeiouy]r[^aeiouy]/gi,(chars) => chars.charAt(0) + chars.charAt(1) + 'u' + chars.charAt(2)) // voyelle + /r/ + consonne = voyelle + r + u + consonne (ex : bermut -> berumut)  
         .replace(/[t]r[aeiouy]/gi,(chars) => chars.charAt(0) + "or" + chars.charAt(2)) // (ex : travel -> toravel) 
         .replace(/[^aeiouy ]l/gi, (chars) => chars.charAt(0) + "ur") // consonne + /l/ = consonne + ur (ex : pla -> pura)
         .replace(/sj/gi, "sh") // sj -> shi
        .replace(/[bcfghjklmpqrsvwxz][bcfgjktdlmnpqrsvxz]/gi,(chars) => chars.charAt(0) + 'u' + chars.charAt(1))  // for all consonants clusters excepts starting by /d/, /t/, /h/ and /n/ , insertion of <u> between the two consonants (krep -> kurep)
         .replace(/s[^aeiouyjh]/gi, (chars) => chars.charAt(0) + "u" + chars.charAt(1)) // /s/ + conssonne = su (ex : plastik -> plasutik)
         .replace(/ti/gi, "chi") // ti -> chi
         .replace(/di/gi, "ji") // di -> ji
      //   .replace(/k(?:(?<![\wāīūēō])(?=[\wāīūēō])|(?<=[\wāīūēō])(?![\wāīūēō]))/gi, "ku") // k final -> ku
        // .replace(/j(?:(?<![\wāīūēō])(?=[\wāīūēō])|(?<=[\wāīūēō])(?![\wāīūēō]))/gi, "ju") // j final -> ju
         .replace(/t(?:(?<![\wāīūēō])(?=[\wāīūēō])|(?<=[\wāīūēō])(?![\wāīūēō]))/gi,(chars) => chars.charAt(0) + "o") // /t/ in final = <to> (ex : gift -> gifto)
         .replace(/si/gi, "shi") // /si/ = shi (ex : mersi => mershi)
      
         .replace(/l/gi, "r") // l -> r
         .replace(/ʒ/gi, "j") // ʒ -> j
         .replace(/[əøy]/gi, "u") // [əøy]  -> u

         .replace(/v/gi,(chars) => "b") // v -> b (ex : television -> telebision)   
         
         
         .replace(/wa/gi,(chars) => "owa") // wa -> owa (ex : rwa -> rowa)     




         .replace(/[dj]\b/gi, "ju") // dj (FINAL) -> ju (kɑ̃bɔdj -> kɑ̃boju)

         .replace(/ʃ/gi, "sh") // ʃ -> sh



         .replace(/[rmlszvgbhkj](?:(?<![\wāīūēō])(?=[\wāīūēō])|(?<=[\wāīūēō])(?![\wāīūēō]))/gi, (chars) => chars.charAt(0) + "u") // k, j, r, m, l, s, z, v, g, b, h final -> consonant + <u> (krim -> krimu, pis -> pisu)
         
    )
}

  return (
    <>
      <label>
        Japanize:
        <input
          value={form.encoded}
          onChange={e => {
            setForm({
              ...form,
              encoded: e.target.value
            });
          }}
        />
      </label>
      <p>
            {japanize(form.encoded)}
      </p>
    </>
  );
}
