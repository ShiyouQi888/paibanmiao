import { FolderOpen, Cat } from 'lucide-react';
import { useFileSystem } from '../../hooks/useFileSystem';
import './Welcome.css';

export function Welcome() {
    const { selectWorkspace } = useFileSystem();

    return (
        <div className="welcome-container">
            <div className="welcome-content">
                <div className="welcome-logo-container">
                    <Cat size={64} color="#07C160" strokeWidth={2} />
                </div>
                <h1>欢迎使用 排版喵</h1>
                <p>请选择一个文件夹作为工作区以开始写作</p>
                <button className="btn-primary" onClick={selectWorkspace}>
                    <FolderOpen size={20} />
                    选择工作区文件夹
                </button>
            </div>
        </div>
    );
}
