// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class DailyBond extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save DailyBond entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save DailyBond entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("DailyBond", id.toString(), this);
  }

  static load(id: string): DailyBond | null {
    return store.get("DailyBond", id) as DailyBond | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }
}

export class Ohmie extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Ohmie entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Ohmie entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Ohmie", id.toString(), this);
  }

  static load(id: string): Ohmie | null {
    return store.get("Ohmie", id) as Ohmie | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get bondDeposits(): Array<string> {
    let value = this.get("bondDeposits");
    return value.toStringArray();
  }

  set bondDeposits(value: Array<string>) {
    this.set("bondDeposits", Value.fromStringArray(value));
  }

  get bondRedemptions(): Array<string> {
    let value = this.get("bondRedemptions");
    return value.toStringArray();
  }

  set bondRedemptions(value: Array<string>) {
    this.set("bondRedemptions", Value.fromStringArray(value));
  }

  get stakeTransactions(): Array<string> {
    let value = this.get("stakeTransactions");
    return value.toStringArray();
  }

  set stakeTransactions(value: Array<string>) {
    this.set("stakeTransactions", Value.fromStringArray(value));
  }

  get unstakeTransactions(): Array<string> {
    let value = this.get("unstakeTransactions");
    return value.toStringArray();
  }

  set unstakeTransactions(value: Array<string>) {
    this.set("unstakeTransactions", Value.fromStringArray(value));
  }

  get historicBalance(): Array<string> {
    let value = this.get("historicBalance");
    return value.toStringArray();
  }

  set historicBalance(value: Array<string>) {
    this.set("historicBalance", Value.fromStringArray(value));
  }

  get lastBalance(): string | null {
    let value = this.get("lastBalance");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lastBalance(value: string | null) {
    if (value === null) {
      this.unset("lastBalance");
    } else {
      this.set("lastBalance", Value.fromString(value as string));
    }
  }
}

export class OhmieBalance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save OhmieBalance entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save OhmieBalance entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("OhmieBalance", id.toString(), this);
  }

  static load(id: string): OhmieBalance | null {
    return store.get("OhmieBalance", id) as OhmieBalance | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get sohmBalance(): BigDecimal {
    let value = this.get("sohmBalance");
    return value.toBigDecimal();
  }

  set sohmBalance(value: BigDecimal) {
    this.set("sohmBalance", Value.fromBigDecimal(value));
  }

  get ohmBalance(): BigDecimal {
    let value = this.get("ohmBalance");
    return value.toBigDecimal();
  }

  set ohmBalance(value: BigDecimal) {
    this.set("ohmBalance", Value.fromBigDecimal(value));
  }

  get bondBalance(): BigDecimal {
    let value = this.get("bondBalance");
    return value.toBigDecimal();
  }

  set bondBalance(value: BigDecimal) {
    this.set("bondBalance", Value.fromBigDecimal(value));
  }

  get dollarBalance(): BigDecimal {
    let value = this.get("dollarBalance");
    return value.toBigDecimal();
  }

  set dollarBalance(value: BigDecimal) {
    this.set("dollarBalance", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Deposit extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Deposit entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Deposit entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Deposit", id.toString(), this);
  }

  static load(id: string): Deposit | null {
    return store.get("Deposit", id) as Deposit | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get maxPremium(): BigDecimal {
    let value = this.get("maxPremium");
    return value.toBigDecimal();
  }

  set maxPremium(value: BigDecimal) {
    this.set("maxPremium", Value.fromBigDecimal(value));
  }

  get token(): string {
    let value = this.get("token");
    return value.toString();
  }

  set token(value: string) {
    this.set("token", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Redemption extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Redemption entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Redemption entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Redemption", id.toString(), this);
  }

  static load(id: string): Redemption | null {
    return store.get("Redemption", id) as Redemption | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string | null {
    let value = this.get("transaction");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set transaction(value: string | null) {
    if (value === null) {
      this.unset("transaction");
    } else {
      this.set("transaction", Value.fromString(value as string));
    }
  }

  get ohmie(): string | null {
    let value = this.get("ohmie");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set ohmie(value: string | null) {
    if (value === null) {
      this.unset("ohmie");
    } else {
      this.set("ohmie", Value.fromString(value as string));
    }
  }

  get token(): string | null {
    let value = this.get("token");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set token(value: string | null) {
    if (value === null) {
      this.unset("token");
    } else {
      this.set("token", Value.fromString(value as string));
    }
  }

  get timestamp(): BigInt | null {
    let value = this.get("timestamp");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBigInt();
    }
  }

  set timestamp(value: BigInt | null) {
    if (value === null) {
      this.unset("timestamp");
    } else {
      this.set("timestamp", Value.fromBigInt(value as BigInt));
    }
  }
}

export class Stake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Stake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Stake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Stake", id.toString(), this);
  }

  static load(id: string): Stake | null {
    return store.get("Stake", id) as Stake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Unstake extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Unstake entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Unstake entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Unstake", id.toString(), this);
  }

  static load(id: string): Unstake | null {
    return store.get("Unstake", id) as Unstake | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get ohmie(): string {
    let value = this.get("ohmie");
    return value.toString();
  }

  set ohmie(value: string) {
    this.set("ohmie", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Rebase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Rebase entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Rebase entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Rebase", id.toString(), this);
  }

  static load(id: string): Rebase | null {
    return store.get("Rebase", id) as Rebase | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get transaction(): string {
    let value = this.get("transaction");
    return value.toString();
  }

  set transaction(value: string) {
    this.set("transaction", Value.fromString(value));
  }

  get amount(): BigDecimal {
    let value = this.get("amount");
    return value.toBigDecimal();
  }

  set amount(value: BigDecimal) {
    this.set("amount", Value.fromBigDecimal(value));
  }

  get stakedOhms(): BigDecimal {
    let value = this.get("stakedOhms");
    return value.toBigDecimal();
  }

  set stakedOhms(value: BigDecimal) {
    this.set("stakedOhms", Value.fromBigDecimal(value));
  }

  get percentage(): BigDecimal {
    let value = this.get("percentage");
    return value.toBigDecimal();
  }

  set percentage(value: BigDecimal) {
    this.set("percentage", Value.fromBigDecimal(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }
}

export class Transaction extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Transaction entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Transaction entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Transaction", id.toString(), this);
  }

  static load(id: string): Transaction | null {
    return store.get("Transaction", id) as Transaction | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get blockNumber(): BigInt {
    let value = this.get("blockNumber");
    return value.toBigInt();
  }

  set blockNumber(value: BigInt) {
    this.set("blockNumber", Value.fromBigInt(value));
  }

  get blockHash(): Bytes {
    let value = this.get("blockHash");
    return value.toBytes();
  }

  set blockHash(value: Bytes) {
    this.set("blockHash", Value.fromBytes(value));
  }

  get from(): Bytes {
    let value = this.get("from");
    return value.toBytes();
  }

  set from(value: Bytes) {
    this.set("from", Value.fromBytes(value));
  }

  get to(): Bytes | null {
    let value = this.get("to");
    if (value === null || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toBytes();
    }
  }

  set to(value: Bytes | null) {
    if (value === null) {
      this.unset("to");
    } else {
      this.set("to", Value.fromBytes(value as Bytes));
    }
  }

  get value(): BigInt {
    let value = this.get("value");
    return value.toBigInt();
  }

  set value(value: BigInt) {
    this.set("value", Value.fromBigInt(value));
  }

  get gasUsed(): BigInt {
    let value = this.get("gasUsed");
    return value.toBigInt();
  }

  set gasUsed(value: BigInt) {
    this.set("gasUsed", Value.fromBigInt(value));
  }

  get gasPrice(): BigInt {
    let value = this.get("gasPrice");
    return value.toBigInt();
  }

  set gasPrice(value: BigInt) {
    this.set("gasPrice", Value.fromBigInt(value));
  }
}

export class Token extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save Token entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save Token entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("Token", id.toString(), this);
  }

  static load(id: string): Token | null {
    return store.get("Token", id) as Token | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }
}

export class ProtocolMetric extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save ProtocolMetric entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save ProtocolMetric entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("ProtocolMetric", id.toString(), this);
  }

  static load(id: string): ProtocolMetric | null {
    return store.get("ProtocolMetric", id) as ProtocolMetric | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get circulatingSupply(): BigDecimal {
    let value = this.get("circulatingSupply");
    return value.toBigDecimal();
  }

  set circulatingSupply(value: BigDecimal) {
    this.set("circulatingSupply", Value.fromBigDecimal(value));
  }

  get totalSupply(): BigDecimal {
    let value = this.get("totalSupply");
    return value.toBigDecimal();
  }

  set totalSupply(value: BigDecimal) {
    this.set("totalSupply", Value.fromBigDecimal(value));
  }

  get ohmPrice(): BigDecimal {
    let value = this.get("ohmPrice");
    return value.toBigDecimal();
  }

  set ohmPrice(value: BigDecimal) {
    this.set("ohmPrice", Value.fromBigDecimal(value));
  }

  get marketCap(): BigDecimal {
    let value = this.get("marketCap");
    return value.toBigDecimal();
  }

  set marketCap(value: BigDecimal) {
    this.set("marketCap", Value.fromBigDecimal(value));
  }

  get totalValueLocked(): BigDecimal {
    let value = this.get("totalValueLocked");
    return value.toBigDecimal();
  }

  set totalValueLocked(value: BigDecimal) {
    this.set("totalValueLocked", Value.fromBigDecimal(value));
  }

  get totalOHMstaked(): BigDecimal {
    let value = this.get("totalOHMstaked");
    return value.toBigDecimal();
  }

  set totalOHMstaked(value: BigDecimal) {
    this.set("totalOHMstaked", Value.fromBigDecimal(value));
  }

  get treasuryRiskFreeValue(): BigDecimal {
    let value = this.get("treasuryRiskFreeValue");
    return value.toBigDecimal();
  }

  set treasuryRiskFreeValue(value: BigDecimal) {
    this.set("treasuryRiskFreeValue", Value.fromBigDecimal(value));
  }

  get treasuryMarketValue(): BigDecimal {
    let value = this.get("treasuryMarketValue");
    return value.toBigDecimal();
  }

  set treasuryMarketValue(value: BigDecimal) {
    this.set("treasuryMarketValue", Value.fromBigDecimal(value));
  }

  get totalSlpSupply(): BigDecimal {
    let value = this.get("totalSlpSupply");
    return value.toBigDecimal();
  }

  set totalSlpSupply(value: BigDecimal) {
    this.set("totalSlpSupply", Value.fromBigDecimal(value));
  }

  get treasuryTotalDaiSlpSupply(): BigDecimal {
    let value = this.get("treasuryTotalDaiSlpSupply");
    return value.toBigDecimal();
  }

  set treasuryTotalDaiSlpSupply(value: BigDecimal) {
    this.set("treasuryTotalDaiSlpSupply", Value.fromBigDecimal(value));
  }

}
