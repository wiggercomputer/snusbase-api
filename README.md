Sure! Here’s a README for your `snusbase-api` TypeScript wrapper:

---

# snusbase-api

A TypeScript wrapper for the Snusbase API. This package allows you to easily interact with the Snusbase API to perform various actions such as searching data, getting statistics, IP WHOIS lookups, and hash lookups.

## Installation

First, install the package via npm:

```bash
npm install snusbase-api
```

## Usage

### Importing and Initializing

Import and initialize the `SnusbaseAPI` class with your API key:

```typescript
import SnusbaseAPI from 'snusbase-api';

const apiKey = 'YOUR_API_KEY_HERE';
const snusbase = new SnusbaseAPI(apiKey);
```

### Examples

#### Search Data

```typescript
async function searchExample() {
  try {
    const searchResults = await snusbase.search({
      terms: ['example@gmail.com'],
      types: ['email'],
    });
    console.log('Search Results:', searchResults);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

#### Get Stats

```typescript
async function getStatsExample() {
  try {
    const stats = await snusbase.getStats();
    console.log('Stats:', stats);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

#### IP WHOIS Lookup

```typescript
async function ipWhoisExample() {
  try {
    const whoisResults = await snusbase.ipWhois({
      terms: ['12.34.56.78'],
    });
    console.log('Whois Results:', whoisResults);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

#### Hash Lookup

```typescript
async function hashLookupExample() {
  try {
    const hashResults = await snusbase.hashLookup({
      terms: ['5f4dcc3b5aa765d61d8327deb882cf99'],
      types: ['hash'],
    });
    console.log('Hash Lookup Results:', hashResults);
  } catch (error) {
    console.error('Error:', error);
  }
}
```

### Running the Examples

To run the examples without compiling, use `ts-node`:

```bash
npx ts-node src/index.ts
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any improvements or bugs.

## License

---

Replace `"YOUR_API_KEY_HERE"` with your actual Snusbase API key and update the contact information with your details. This README provides a comprehensive guide to using your `snusbase-api` package.
