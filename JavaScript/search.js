// DOM（HTML）の読み込みが完了したら実行
document.addEventListener('DOMContentLoaded', () => {

    // HTMLから必要な部品を取得
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    const contentArea = document.getElementById('search-content-area');
    
    // スマホの画面全体（中身）のコンテナ
    const appContainer = document.querySelector('.kframeinner');

    // 検索を実行する関数
    const performSearch = () => {
        const query = searchInput.value.trim().toLowerCase();

        if (query === '配達.com') {
            router.get('/配達.com', (req, res) => {
                res.render('app/ha');
            });
        };
        
    }
});
