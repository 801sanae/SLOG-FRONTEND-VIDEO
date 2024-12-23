import { writable, get } from "svelte/store";
import { getApi, putApi, postApi, delApi } from "../service/api";
import { router } from "tinro";

function setCurrentArticlesPage(){}
function setArticles(){}
function setLoadingArticles(){}
function setArticleContent(){}
function setComments(){}
function setAuth(){}
function setArticlesMode(){}
function setIsLogin(){}

export const currentArticlesPage = setCurrentArticlesPage()
export const articles = setArticles()
export const loadingArticles= setLoadingArticles()
export const articleContent = setArticleContent()
export const comments = setComments()
export const auth = setAuth()
export const articlesMode = setArticlesMode()
export const isLogin = setIsLogin();