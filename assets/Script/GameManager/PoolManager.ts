import { _decorator, Component, instantiate, Node, NodePool, Prefab } from 'cc';
import { Block } from '../PrefabManager/Block';
const { ccclass, property } = _decorator;

@ccclass('PoolManager')
export class PoolManager extends Component {
    @property({
        type: Prefab,
        tooltip: 'Prefab block'
    })
    private prefabBlock: Prefab;

    @property({
        type: Node,
        tooltip: 'Node animation clear'
    })
    private animationClearNode: Node;

    @property(Prefab)
    private prefabAnimation: Prefab;

    private poolBlock: NodePool = new NodePool();
    private poolClear: NodePool = new NodePool();
    private poolAnim: NodePool = new NodePool();

    protected start(): void {
        this.initPoolBlock();
        this.initPoolClear();
    }

    private initPoolBlock(): void {
        for (let i = 0; i < 20; i++) {
            let element = instantiate(this.prefabBlock);
            this.poolBlock.put(element);
        }
    }

    public getBlock(): Node {
        let element = this.poolBlock.size() > 0 ? this.poolBlock.get() : instantiate(this.prefabBlock);
        return element;
    }

    public removeBlock(block: Node): void {
        block.getComponent(Block).resetBlock();
        this.poolBlock.put(block);
    }


    private initPoolClear(): void {
        while (this.poolClear.size() < 10) this.poolClear.put(instantiate(this.animationClearNode));
    }

    public getClearNode(): Node {
        return this.poolClear.size() > 0 ? this.poolClear.get() : instantiate(this.animationClearNode);
    }

    public putClearNode(clearNode: Node): void {
        this.poolClear.put(clearNode);
    }

    public getAnimationCombo(): Node {
        return this.poolAnim.size() > 0 ? this.poolAnim.get() : instantiate(this.prefabAnimation);
    }

    public putAnimation(node: Node): void {
        this.poolAnim.put(node);
    }
}

