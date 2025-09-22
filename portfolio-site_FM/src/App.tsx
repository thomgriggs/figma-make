import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from "./components/Layout";
import { HomePage } from "./components/HomePage";
import { ProjectDetailPage } from "./components/ProjectDetailPage";
import { ArchivePage } from "./components/ArchivePage";
import { ChatPage } from "./components/ChatPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/project/:projectId" element={
          <Layout>
            <ProjectDetailPage />
          </Layout>
        } />
        <Route path="/archive" element={
          <Layout>
            <ArchivePage />
          </Layout>
        } />
        <Route path="/chat" element={
          <Layout>
            <ChatPage />
          </Layout>
        } />
        {/* Handle preview page route */}
        <Route path="/preview_page.html" element={<Navigate to="/" replace />} />
        {/* Catch all other routes and redirect to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}