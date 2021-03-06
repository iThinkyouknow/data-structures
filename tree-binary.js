'use strict'
const {log} = console;

const create_node = (val) => {
	return {
		val: val,
		left: null,
		right: null
	}
};


const create_binary_tree = (node) => {

	const find_node = (_val_1) => (curr_node) => {
			if (curr_node === null) return null;
	
			if (curr_node.val === _val_1) {
				// find val_2
				return curr_node;

			} else if (_val_1 < curr_node.val) {
				return find_val_1(_val_1)(curr_node.left);

			} else if (_val_1 > curr_node.val) {
				return find_val_1(_val_1)(curr_node.right);
			} 
	};

	const calc_depth = (val_1, val_2) => {

		const find_val_2 = (_val_2) => (curr_node) => (steps) => {
			const new_steps = steps + 1;
			if (curr_node === null) return null;
			
			if (_val_2 === curr_node.val) {
				return steps;

			} else if (_val_2 < curr_node.val) {
				return find_val_2(_val_2)(curr_node.left)(new_steps);

			} else if (_val_2 > curr_node.val) {
				return find_val_2(_val_2)(curr_node.right)(new_steps);
			}
		};

		const val_1_node = find_node(val_1)(node);
		if (val_1_node === null) return console.error('val 1 does not exist in tree');
		const depth = find_val_2(val_2)(val_1_node)(0);
		if (depth === null) return console.error('val 2 does not exist in tree');
		return depth;
	};

	const traverse = (curr_node) => (steps) => {

		if (curr_node === null) return steps;
		const new_steps = steps + 1;
		const left_steps = traverse(curr_node.left)(new_steps);
		const right_steps = traverse(curr_node.right)(new_steps);
		const both_steps = (left_steps >= right_steps) ? left_steps : right_steps;

		return both_steps;
	};

	const calc_height = (_node) => {
		return traverse(_node)(0);
	};

	const height = calc_height(node);

	const is_balanced_fn = (_node) => {	
		const left_steps = (_node.left !== null) ? traverse(_node.left)(0) : 0;
		const right_steps = (_node.right !== null) ? traverse(_node.right)(0) : 0;

		const is_balanced = (Math.abs(left_steps - right_steps) <= 1);

		return is_balanced;
	};

	const is_balanced = is_balanced_fn(node);

	const add_node = (new_node) => {
		//todo
		const insert_node = (_new_node) => (_curr_node) => {
					
			if (_new_node.val === _curr_node.val) return;
			if (_new_node.val > _curr_node.val) {
	
				if (_curr_node.right === null) {

					 _curr_node.right = _new_node;

				} else {
					const {val, right, left} = Object.assign({}, _curr_node.right);
					_curr_node.right = {
						val,
						right,
						left,
					};
					
					return insert_node(_new_node)(_curr_node.right);
				}
			} else if (_new_node.val < _curr_node.val) {
				if (_curr_node.left === null) {
					 _curr_node.left = _new_node;

				} else {
					const {val, right, left} = Object.assign({}, _curr_node.left);
					_curr_node.left = {
						val,
						right,
						left,
					};
					
					return insert_node(_new_node)(_curr_node.left);
				}

			} else {
				return;
			}

		};


		const new_original_node = Object.assign({}, node);
		insert_node(new_node)(new_original_node);
	
		return create_binary_tree(new_original_node);
	};

	const remove_node = (val) => {
		const mod_tree_node = {};
		return create_binary_tree(mod_tree_node);
	};

	const make_from_array = (arr) => {

	};

	return {
		nodes: node,
		depth: calc_depth,
		height: height,
		find: find_node,
		is_balanced: is_balanced,
		add_node: add_node,
		remove_node: remove_node
	};
};

// test case
// const root_node = create_node(678);
// log(root_node);

const test_node = {
	val: 25,
	left: {
		val: 22,
		left: {
			val: 8,
			left: {
				val: 7,
				left: {
					val: 6,
					left: {
						val: 5,
						left: null,
						right: null
					},
					right: null
				},
				right: null
			},
			right: null
		},
		right: null
	},
	right: {
		val: 35,
		left: {
			val: 32,
			left: null,
			right: null
		},
		right: {
			val: 45,
			left: null,
			right: null
		}
	}
};

const b_tree = create_binary_tree(test_node);
// log(b_tree);
// log(b_tree.height);
// log(b_tree.is_balanced);
log(JSON.stringify(b_tree.add_node(create_node(1)), null, 4));
log(JSON.stringify(b_tree.add_node(create_node(2000)), null, 4));
