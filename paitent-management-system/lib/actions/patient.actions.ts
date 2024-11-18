import { ID, Query } from "node-appwrite"
import { users } from "../appwrite.config"
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {
    console.log('Creating user with:', user);

    try {
        // the attributes came from appwrite documentations
        const newUser = await users.create(
            ID.unique(),
            user.email,
            user.phone,
            undefined,
            user.name
        );
        console.log('User created successfully:');
        console.log({ newUser });
        return parseStringify(newUser);

    } catch (error: any) {
        console.error('Error creating user:', error);
        if (error && error?.code === 409) {
            console.log('User already exists. Fetching existing user...');
            const documents = await users.list([
                Query.equal('email', [user.email]),
            ]);

            console.log('Existing user fetched:', documents?.users[0]);
            return documents?.users[0];
        }

    }
}