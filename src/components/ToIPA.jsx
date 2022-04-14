import { useState } from 'react';
import { frDict } from "../data/fr_dict"

export default function Encoder() {
  const [form, setForm] = useState({
    encoded: 'Astronomi',
  });

  function toIPA(s) {

   return (s.split(' ').map(word => {
        if (frDict[word]) {
            return frDict[word]
        } else {
            return "Pas dans le dictionnaire"
        }
    }).join(' '))

}

  return (
    <>
      <label>
        To IPA:
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
            {toIPA(form.encoded)}
      </p>
    </>
  );
}
