import { Route, Routes, useNavigate } from 'react-router-dom';
import React, { lazy, useState } from 'react';
import { Layout } from './Layout/Layout';
import { AppWrapp } from './App.styled';

const Home = lazy(() => import('pages/Home/Home'));
const HeroDetails = lazy(() => import('pages/HeroDetails/HeroDetails'));
const PageNotFound = lazy(() => import('pages/NotFound/PageNotFound'));

export const App = () => {
  return (
    <AppWrapp>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home user={user} />} />
          <Route path="character/:id" element={<HeroDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </AppWrapp>
  );
};
