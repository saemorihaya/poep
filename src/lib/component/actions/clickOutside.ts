// src/actions/clickOutside.ts
export function clickOutside(node: HTMLElement, onOutsideClick: () => void): { destroy: () => void } {
    const handleClick = (event: MouseEvent) => {
        // event.targetがnode内に含まれない場合、コールバックを実行
        if (node && !node.contains(event.target as Node)) {
            onOutsideClick();
        }
    };

    // mousedownイベントを監視することで、要素外のクリックを検知
    document.addEventListener('mousedown', handleClick);

    // コンポーネントが破棄されたときにイベントリスナーを削除するためのdestroyメソッドを返す
    return {
        destroy() {
            document.removeEventListener('mousedown', handleClick);
        }
    };
}
