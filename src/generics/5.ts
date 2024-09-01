export enum UserRole {
	admin = 'admin',
	editor = 'editor',
	guest = 'guest',
}

type UserDescriptionType = Record<UserRole, string>;

// Замініть наступний код на версію за допомогою Record
const RoleDescription: UserDescriptionType = {
	admin: 'Admin User',
	editor: 'Editor User',
	guest: 'Guest User',
};
