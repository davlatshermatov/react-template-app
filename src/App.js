import LanguageProvider from "./i18n/Provider";
import { LOCALES } from "./i18n/constants";
import { connect } from "react-redux";
import { setLanguage } from "./redux/language/language";
import { getAllPost } from "./redux/post/post";
import { useEffect, useState } from "react";
import translate from "./i18n/translate";

function App({ getAllPost, posts }) {
  useEffect(() => {
    getAllPost();
  }, [getAllPost]);

  const [language, setLanguage] = useState(LOCALES.ENGLISH);

  const setLocale = (locale) => {
    setLanguage(locale);
  };

  return (
    <LanguageProvider locale={language}>
      <h1>{translate("hello")}</h1>
      <div>
        <button
          disabled={language === LOCALES.UZBEK}
          onClick={() => {
            setLocale(LOCALES.UZBEK);
          }}
        >
          Uzbek
        </button>
        <button
          disabled={language === LOCALES.ENGLISH}
          onClick={() => {
            setLocale(LOCALES.ENGLISH);
          }}
        >
          English
        </button>
        <button
          disabled={language === LOCALES.RUSSIAN}
          onClick={() => {
            setLocale(LOCALES.RUSSIAN);
          }}
        >
          Russian
        </button>
      </div>
      <hr />
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </LanguageProvider>
  );
}

export default connect(
  ({ postReducer: { posts } }) => {
    console.log("posts", posts);
    return {
      posts,
    };
  },
  {
    getAllPost,
  }
)(App);
